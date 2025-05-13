/*import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import snatch from "../public/snatch.png"

export function Nav() {
  const menuItems = ["Home", "Features", "News", "Monitoring", "Cplc", "Register/Login"]
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between py-6 px-8"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image 
          src={snatch}
          alt="Snatchlock Logo" 
          width={150} 
          height={120}
          className="w-36 h-28"
        />
        <span className="text-xl font-bold text-white"></span>
      </Link>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Link 
              href="#" 
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                item === "Home" ? "text-white" : "text-gray-400"
              }`}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}




*/

/*

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import snatch from "../public/sklogo.png";

// Define the type for the onChangeSection prop
type NavProps = {
  onChangeSection: (sectionId: string) => void;
};

export function Nav({ onChangeSection }: NavProps) {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "news", label: "News" },
    { id: "monitoring", label: "Monitoring" },
    { id: "cplc", label: "CPLC" },
    { id: "register", label: "Register/Login" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between py-6 px-8 bg-gray-900"
    >
      {}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={snatch}
          alt="Snatchlock Logo"
          width={150}
          height={120}
          className="w-26 h-18"
        />
        <span className="text-xl font-bold text-white"></span>
      </Link>

      {}
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <button
              onClick={() => onChangeSection(item.id)} // Call onChangeSection with the menu item's ID
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                item.id === "home" ? "text-white" : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

*/





















import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import snatch from "../public/sklogo.png";

type NavProps = {
  onChangeSection: (sectionId: string) => void;
};

export function Nav({ onChangeSection }: NavProps) {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "news", label: "News" },
    { id: "monitoring", label: "Monitoring" },
    { id: "cplc", label: "CPLC" },
    { id: "evidence", label:  "Evidence"},
    { id: "register", label: "Register/Login" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between py-2 px-8 bg-gray-900"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={snatch}
          alt="Snatchlock Logo"
          width={150}
          height={120}
          className="w-26 h-18"
        />
      </Link>

      <ul className="flex items-center space-x-8">
        {menuItems.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <button
              onClick={() => onChangeSection(item.id)} // Call onChangeSection with the menu item's ID
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                item.id === "home" ? "text-white" : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}



