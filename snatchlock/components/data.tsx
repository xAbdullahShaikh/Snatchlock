/*

THis one is without AI model

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react"; // for loading spinner icon

const sk = "/sklogo.png";

export default function Dataupload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 4 - files.length);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("No files selected.");
      return;
    }

    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      alert("Files uploaded successfully.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        {}
        <div className="flex justify-center mb-6">
          <Image src={sk} alt="Snatchlock Logo" width={200} height={170} />
        </div>

        {}
        <Card className="w-full max-w-md mx-auto bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">
              Monitoring
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <Label htmlFor="file" className="text-zinc-400">
                Select Files
              </Label>
              <Input
                id="file"
                type="file"
                accept="video/*"
                multiple
                className="bg-zinc-700 border-zinc-600 text-white"
                onChange={handleFileChange}
                disabled={files.length >= 4}
              />
              {files.length > 0 && (
                <div className="text-cyan-400 text-sm">
                  Selected Files:
                  <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              onClick={handleUpload}
              className="bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors"
              disabled={isUploading}
            >
              {isUploading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin h-5 w-5" />
                  Uploading...
                </div>
              ) : (
                "Upload"
              )}
            </Button>
          </CardFooter>
        </Card>

        {}
        {files.length > 0 && !isUploading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {files.map((file, index) => (
              <video
                key={index}
                controls
                className="w-full h-64 object-cover border-2 border-cyan-400 rounded-lg"
                src={URL.createObjectURL(file)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}


*/



import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react"; // for loading spinner icon

const sk = "/sklogo.png";

export default function Dataupload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 4 - files.length);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  



const handleUpload = async () => {
  if (files.length === 0) {
    alert("No files selected.");
    return;
  }

  const formData = new FormData();
  formData.append("file", files[0]); // You can support multiple files later if needed

  setIsUploading(true);

  try {
    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      alert(`Upload successful. ${data.message || "Detection complete."}`);
      console.log("Detection Result:", data.result);
    } else {
      alert(`Upload failed: ${data.error || "Unknown error"}`);
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred during upload.");
  } finally {
    setIsUploading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        {}
        <div className="flex justify-center mb-6">
          <Image src={sk} alt="Snatchlock Logo" width={200} height={170} />
        </div>

        {}
        <Card className="w-full max-w-md mx-auto bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">
              Monitoring
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <Label htmlFor="file" className="text-zinc-400">
                Select Files
              </Label>
              <Input
                id="file"
                type="file"
                accept="video/*"
                multiple
                className="bg-zinc-700 border-zinc-600 text-white"
                onChange={handleFileChange}
                disabled={files.length >= 4}
              />
              {files.length > 0 && (
                <div className="text-cyan-400 text-sm">
                  Selected Files:
                  <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              onClick={handleUpload}
              className="bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors"
              disabled={isUploading}
            >
              {isUploading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin h-5 w-5" />
                  Uploading...
                </div>
              ) : (
                "Upload"
              )}
            </Button>
          </CardFooter>
        </Card>

        {}
        {files.length > 0 && !isUploading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {files.map((file, index) => (
              <video
                key={index}
                controls
                className="w-full h-64 object-cover border-2 border-cyan-400 rounded-lg"
                src={URL.createObjectURL(file)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}



