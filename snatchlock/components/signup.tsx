


import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Login from "@/components/login"; 
import { auth } from "@/firebase"; // Import Firebase authentication
import { createUserWithEmailAndPassword } from "firebase/auth";

const sk = "/sklogo.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isLogin) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex justify-center mb-4">
          <Image src={sk} alt="Snatchlock Logo" width={200} height={170} className="w-46 h-38" />
        </div>

        <Card className="w-full max-w-md bg-zinc-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-cyan-400">Sign Up</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Label htmlFor="username" className="text-zinc-400">Username</Label>
                <Input id="username" type="text" placeholder="Enter your username" required className="bg-zinc-700 border-zinc-600 text-white pl-10"
                  value={username} onChange={(e) => setUsername(e.target.value)} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Label htmlFor="email" className="text-zinc-400">Email</Label>
                <div className="relative">
                  <Input id="email" type="email" placeholder="Enter your email" required className="bg-zinc-700 border-zinc-600 text-white pl-10"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <Label htmlFor="password" className="text-zinc-400">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required
                    className="bg-zinc-700 border-zinc-600 text-white pl-10 pr-10"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 focus:outline-none">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-zinc-900 transition-colors" disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </Button>
              </motion.div>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-cyan-400">
              Already have an account?{" "}
              <button className="hover:underline text-cyan-400" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
