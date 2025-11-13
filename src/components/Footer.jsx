import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full mt-20 px-6 sm:px-10 py-10
      bg-white/5 backdrop-blur-lg border-t border-white/10
      shadow-[0_0_35px_rgba(168,85,247,0.2)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* ========== LEFT: Logo + Tagline ========== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center sm:text-left"
        >
          <h3 className="text-xl font-bold text-white">Sahil Shinde</h3>
          <p className="text-gray-400 text-sm mt-1">
            Full-Stack Developer • Crafting Beautiful Web Experiences
          </p>
        </motion.div>

        {/* ========== MIDDLE: Quick Links ========== */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-6 text-white/80 text-sm"
        >
          <li className="hover:text-purple-400 transition"><a href="#home">Home</a></li>
          <li className="hover:text-purple-400 transition"><a href="#about">About</a></li>
          <li className="hover:text-purple-400 transition"><a href="#skills">Skills</a></li>
          <li className="hover:text-purple-400 transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-purple-400 transition"><a href="#contact">Contact</a></li>
        </motion.ul>

        {/* ========== RIGHT: Social Icons ========== */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center gap-5 text-2xl"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sahil-shinde13/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-purple-400 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sahil-Shinde-13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-purple-400 hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>

      {/* ========== COPYRIGHT ========== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-gray-500 text-xs mt-8"
      >
        © {new Date().getFullYear()} Sahil Shinde. All rights reserved.
      </motion.p>
    </footer>
  );
}
