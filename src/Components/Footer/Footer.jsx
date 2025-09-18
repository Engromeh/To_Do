import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          {["About", "Blog", "Jobs", "Press", "Accessibility", "Partners"].map((link) => (
            <motion.a
              key={link}
              href="#"
              className="hover:text-white"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {[FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="hover:text-white"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
