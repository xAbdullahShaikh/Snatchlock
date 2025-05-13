/*
correct without auth

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "../components/nav";
import LoginPage from "../components/login";
import SignupPage from "../components/signup";
import CplcRegistrationForm from "../components/cplc";
import Dataupload from "../components/data"; // Import the Monitor component
import CrimeReportPage from "../components/evidence"; // Import the CrimeReportPage
import cctv from "../public/cctv.png";
import { Footer } from "@/components/shooter";


export default function Hero() {
  const [currentSection, setCurrentSection] = useState("home");
  

  const renderSection = () => {
    switch (currentSection) {
      case "register":
        return <SignupPage />;
      case "cplc":
        return <CplcRegistrationForm />;
      case "monitoring":
        return <Dataupload />; // Render Monitor when "Monitoring" is clicked
      case "crimeReport":
        return <CrimeReportPage />;
      case "evidence":
        return <CrimeReportPage />; // Render CrimeReportPage when "Report Crime" is clicked
      default:
        return (
          <div className="container mx-auto px-8 pt-20 pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 text-sm"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">NO MORE CRIME</span>
                </motion.div>

                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                  >
                    The Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                      crime prevention
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg max-w-xl leading-relaxed"
                  >
                    Leveraging AI for real-time behavior detection, our system
                    generates instant alerts through blockchain smart contracts.
                    Evidence is securely preserved on the blockchain, ensuring
                    integrity and accessibility for law enforcement. Experience
                    a safer, smarter, and more transparent crime prevention
                    network.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <button className="relative px-8 py-4 bg-gray-900 rounded-full text-cyan-300 font-medium hover:text-white transition-colors">
                    Get Started
                    <span className="ml-2">→</span>
                  </button>
                </motion.div>
              </div>

              {}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  type: "spring",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-2xl" />
                <Image
                  src={cctv}
                  alt="AI-powered security camera"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-300 opacity-20 blur-2xl animate-pulse" />
              </motion.div>
              
            </div>
            
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav onChangeSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}


*/












"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "../components/nav";
import LoginPage from "../components/login";
import SignupPage from "../components/signup";
import CplcRegistrationForm from "../components/cplc";
import Dataupload from "../components/data"; // Import the Monitor component
import CrimeReportPage from "../components/evidence"; // Import the CrimeReportPage
import cctv from "../public/cctv.png";
import { Footer } from "@/components/shooter";


export default function Hero() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const renderSection = () => {
    
  // Protected sections that require login
    const protectedSections = ["cplc", "monitoring", "evidence"];

    if (protectedSections.includes(currentSection) && !isLoggedIn) {
      return (
        <div className="text-center text-red-500 py-10">
          <p>You must be logged in to access this section.</p>
          <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
        </div>
      );
    }

  
    switch (currentSection) {
      case "register":
        return <SignupPage />;
      case "cplc":
        return <CplcRegistrationForm />;
      case "monitoring":
        return <Dataupload />; // Render Monitor when "Monitoring" is clicked
      case "crimeReport":
        return <CrimeReportPage />;
      case "evidence":
        return <CrimeReportPage />; // Render CrimeReportPage when "Report Crime" is clicked
      default:
        return (
          <div className="container mx-auto px-8 pt-20 pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 text-sm"
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">NO MORE CRIME</span>
                </motion.div>

                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                  >
                    The Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                      crime prevention
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg max-w-xl leading-relaxed"
                  >
                    Leveraging AI for real-time behavior detection, our system
                    generates instant alerts through blockchain smart contracts.
                    Evidence is securely preserved on the blockchain, ensuring
                    integrity and accessibility for law enforcement. Experience
                    a safer, smarter, and more transparent crime prevention
                    network.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <button className="relative px-8 py-4 bg-gray-900 rounded-full text-cyan-300 font-medium hover:text-white transition-colors">
                    Get Started
                    <span className="ml-2">→</span>
                  </button>
                </motion.div>
              </div>

              {}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  type: "spring",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-2xl" />
                <Image
                  src={cctv}
                  alt="AI-powered security camera"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-300 opacity-20 blur-2xl animate-pulse" />
              </motion.div>
              
            </div>
            
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav onChangeSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}












