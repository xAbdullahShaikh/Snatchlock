



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase"; // Ensure correct import path
import SignupPage from "./signup";

const snatch = "/sklogo.png"; // Ensure the image is in the public folder

export default function AuthPage({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <LoginPage switchToSignup={() => setIsLogin(false)} onLoginSuccess={onLoginSuccess} />
  ) : (
    <SignupPage switchToLogin={() => setIsLogin(true)} />
  );
}


function LoginPage({ switchToSignup, onLoginSuccess }: { switchToSignup: () => void; onLoginSuccess: () => void }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCaptcha(result);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Login attempt started...");

  if (captchaValue !== generatedCaptcha) {
    alert("Captcha does not match. Please try again!");
    generateCaptcha(); // Regenerate captcha on failure
    return;
  }

  try {
  console.log("Attempting Firebase Authentication...");
  await signInWithEmailAndPassword(auth, email, password);
  console.log("Login successful!");
  alert("yay Login successful!");
  onLoginSuccess(); // 🔥 Call this function on successful login
 } catch (error: any) {
  console.error("Login error:", error);
  setError(error.message || "Invalid email or password. Please try again.");
 }

};


  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex justify-center mb-4">
          <Image src={snatch} alt="Snatchlock Logo" width={200} height={170} className="w-46 h-38" />
        </div>

        <Card className="w-full max-w-md bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">Login</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-400">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-700 border-zinc-600 text-white pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-400">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-zinc-700 border-zinc-600 text-white pl-10 pr-10"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="captcha" className="text-zinc-400">Captcha</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="captcha"
                    type="text"
                    placeholder="Enter captcha"
                    value={captchaValue}
                    onChange={(e) => setCaptchaValue(e.target.value)}
                    required
                    className="bg-zinc-700 border-zinc-600 text-white flex-grow"
                  />
                  <div className="bg-zinc-700 px-3 py-2 rounded text-cyan-400 font-bold">{generatedCaptcha}</div>
                  <Button type="button" onClick={generateCaptcha} className="bg-zinc-700 border-zinc-600 text-cyan-400 hover:bg-zinc-600">
                    <RefreshCw size={18} />
                  </Button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors">
                Login
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2">
            <a href="#" className="text-cyan-400 hover:underline">Forgot password?</a>
            <div className="text-sm text-zinc-400">
              Don't have an account?{" "}
              <button onClick={switchToSignup} className="text-cyan-400 hover:underline">Sign Up</button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}


