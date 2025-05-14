import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import snatch from "../public/sklogo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Footer() {
  const footerLinks = [
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    { title: "Product", links: ["Features", "Pricing", "Integrations", "Docs"] },
    { title: "Support", links: ["Help Center", "Terms", "Privacy Policy"] },
  ];

  const socialMedia = [
    { id: "facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
    { id: "twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    { id: "linkedin", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-gray-400 py-12 px-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center space-x-4">
          <Image
            src={snatch}
            alt="Snatchlock Logo"
            width={120}
            height={80}
            className="w-28 h-20"
          />
          <span className="text-white text-lg font-bold">SnatchLock</span>
        </div>
        <div className="flex flex-wrap justify-between mt-6 md:mt-0 space-x-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-[120px]">
              <h4 className="text-white text-sm font-medium mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-sm text-center md:text-left">
          &copy; 2024 SnatchLock. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {socialMedia.map((social) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-cyan-400 transition-colors"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
