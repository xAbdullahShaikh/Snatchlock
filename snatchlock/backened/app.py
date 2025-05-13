"""
THis one is for yoloonlly



from flask import Flask, request, jsonify
import os
from ultralytics import YOLO
import cv2

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'

# Create folders if not exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Load your custom model
model = YOLO("D:/SnatchLock/snatchlock/backened/best.pt")  # make sure best.pt is in the same folder or use full path

def detect_video(input_path, output_path):
    cap = cv2.VideoCapture(input_path)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        results = model(frame)[0]
        annotated = results.plot()
        out.write(annotated)

    cap.release()
    out.release()

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    filename = file.filename
    input_path = os.path.join(UPLOAD_FOLDER, filename)
    output_path = os.path.join(OUTPUT_FOLDER, f"processed_{filename}")

    file.save(input_path)
    detect_video(input_path, output_path)

    return jsonify({
        'message': 'Video processed successfully',
        'output_video_url': f"/outputs/processed_{filename}"
    })

if __name__ == '__main__':
    app.run(debug=True)

    
"""






import os
import subprocess
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'clipvad', 'src'))

from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import torch
import numpy as np
from PIL import Image
from torchvision import transforms

from ultralytics import YOLO
from clipvad.src.model import CLIPVAD
from clipvad.src.clip import clip
from clipvad.src.utils.layers import GraphConvolution, DistanceAdj

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# --- YOLO SETUP ---
yolo_model = YOLO("best.pt")

# --- CLIPVAD SETUP ---
device = "cuda" if torch.cuda.is_available() else "cpu"
clip_model_path = "clipvad/model/model_ucf.pth"

clipvad_model = CLIPVAD(
    num_class=1,
    embed_dim=512,
    visual_length=256,       # Must match training
    visual_width=512,
    visual_head=8,
    visual_layers=2,         # Based on checkpoint
    attn_window=8,
    prompt_prefix=1,
    prompt_postfix=1,
    device=device
).to(device)

clipvad_model.load_state_dict(torch.load(clip_model_path, map_location=device))
clipvad_model.eval()

# Prompts
text_prompts = ["normal", "anomaly"]

# CLIP preprocess
clip_preprocess = transforms.Compose([
    transforms.Resize((224, 224), interpolation=Image.BICUBIC),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.48145466, 0.4578275, 0.40821073],
                         std=[0.26862954, 0.26130258, 0.27577711])
])

def run_yolo(frame):
    results = yolo_model(frame)[0]
    return results.plot()

def extract_clip_features(video_path, model, preprocess, device, target_length=256):
    cap = cv2.VideoCapture(video_path)
    frames = []
    while len(frames) < target_length:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        frame = Image.fromarray(frame)
        frame = preprocess(frame)
        frames.append(frame)
    cap.release()

    if len(frames) < target_length:
        frames += [frames[-1]] * (target_length - len(frames))

    frames = torch.stack(frames).to(device)  # [T, 3, 224, 224]

    with torch.no_grad():
        features = model.encode_image(frames)  # [T, 512]

    features = features.unsqueeze(0)  # [1, T, 512]
    return features, [target_length]

def detect_video_with_models(input_path, output_path):
    cap = cv2.VideoCapture(input_path)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        annotated = run_yolo(frame)
        out.write(annotated)
    cap.release()
    out.release()

    # Run CLIPVAD on entire video
    video_tensor, lengths = extract_clip_features(
        input_path,
        clipvad_model.clipmodel,
        clip_preprocess,
        device,
        target_length=256
    )

    with torch.no_grad():
        _, _, logits2 = clipvad_model(video_tensor, None, text_prompts, lengths)
        anomaly_score = torch.sigmoid(logits2).mean().item()

    print(f"[CLIPVAD] Anomaly Score for {os.path.basename(input_path)}: {anomaly_score:.4f}")
    return anomaly_score
@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    filename = file.filename
    input_path = os.path.join(UPLOAD_FOLDER, filename)
    output_path = os.path.join(OUTPUT_FOLDER, f"processed_{filename}")

    file.save(input_path)

    anomaly_score = detect_video_with_models(input_path, output_path)

    # Real-time alert condition
    if anomaly_score >= 0.75:
        print(f"[ALERT] High anomaly score detected: {anomaly_score:.4f} — sending Twilio alert...")
        subprocess.Popen(["node", "custom_script.js"])  # Runs Node script
    else:
        print(f"[INFO] Anomaly score {anomaly_score:.4f} — no alert sent.")

    return jsonify({
        'message': 'Video processed successfully',
        'output_video_url': f"/outputs/processed_{filename}",
        'anomaly_score': anomaly_score
    })


if __name__ == '__main__':
    app.run(debug=True)
