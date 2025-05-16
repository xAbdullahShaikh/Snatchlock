## 🛡️ SnatchLock: AI-Powered Crime Detection and Evidence Management System

**SnatchLock** is a cutting-edge crime prevention platform developed as part of a Final Year Project at FAST-NUCES. It integrates **real-time AI-based surveillance**, **blockchain**, and **decentralized storage** to intelligently detect criminal activity and securely preserve digital evidence.

<img src="https://github.com/user-attachments/assets/aecd194a-f6f7-4117-aa13-73155020b5d5" align="center"/>
###  Key Features

* **AI-Powered Crime Detection**

  * Combines **FINE TUNED YOLOv8** for real-time object detection (e.g., weapons, human activity) and **VADCLIP** for detecting suspicious behavior.
  * Triggers real-time alerts to law enforcement and users upon detection.

 <img src="https://github.com/user-attachments/assets/4134f55f-03f0-4a0d-abd7-753a184460d6"  />
 <img src="https://github.com/user-attachments/assets/65d04060-57a6-4ae0-9f3a-391f95c7d714"  />

* **Tamper-Proof Evidence Management**

  * Captures and stores images, videos, and metadata (timestamp, geolocation) on **IPFS** (InterPlanetary File System).
  * Secures evidence integrity by recording the IPFS hash on the **Ethereum blockchain** via **MetaMask** and smart contracts.
    
<img src="https://github.com/user-attachments/assets/e336ab5f-929f-4faa-bd7e-39b5bbfb582e"  />
<img src="https://github.com/user-attachments/assets/c5acb742-3c86-4ef8-98c2-9bbddd15e253"  />
<img src="https://github.com/user-attachments/assets/e51b983a-cb6f-4964-8fff-97cdc3277529"  />
  
* **User Roles & Access**

  * Admins: Manage users and system configuration.
  * Law Enforcement Officers: Access surveillance feeds, incident logs, and respond to alerts.
  * Citizens: Report crimes through the integrated **CPLC Complaint System**.
    
<img src="https://github.com/user-attachments/assets/bb3bf39f-0eef-40da-a27d-2902f27eef9a" />



<img src="https://github.com/user-attachments/assets/916b5775-ec48-410d-8804-76d21e49457e"  />


* **Secure Infrastructure**

  * Enforced with **AES-256 encryption**, **TLS/SSL**, **multi-factor authentication**, and **role-based access control (RBAC)**.
  * Built using **Docker** and deployed via **Docker Compose** for modular, containerized deployment.
    
<img src="https://github.com/user-attachments/assets/12d12a7c-264e-4962-9d63-a41fbba35701"  />
<img src="https://github.com/user-attachments/assets/528f6c90-e640-495c-88c2-0acdd1b14090"  />

* **Real-Time Notifications**

  * Sends alert messages with geo-coordinates using **Twilio API**.

![twilio alert](https://github.com/user-attachments/assets/2fd1c06a-d2a4-4bcc-acee-ed426a56b9eb)


###  Technologies Used

* **Frontend**: React.js (Next.js), Tailwind CSS
* **Backend**: Flask (Python), FastAPI
* **AI Models**: YOLOv8 (Object Detection), CLIPVAD (Anomaly Detection)
* **Blockchain**: Ethereum Smart Contracts, MetaMask Integration
* **Storage**: IPFS
* **Containerization**: Docker, Docker Compose
* **Notifications**: Twilio SMS API
  
### 🛠 System Architecture

1. Live CCTV Feed → AI Model (YOLOv8 + CLIPVAD)
2. Suspicious Activity Detected → Real-Time Alert + Evidence Captured
3. Evidence → IPFS (Storage) → IPFS Hash → Ethereum Blockchain (Smart Contract)
4. MetaMask → Secure Transaction Confirmation

### 📈 Future Enhancements

* Integration with **Google Maps API** for nearest police station routing
* Web3 login using national digital identity
* Continuous ML model retraining with real-time data
* Edge computing support for local CCTV processing




