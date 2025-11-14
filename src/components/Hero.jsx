import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Hero({ showContent }) {
  //  Scroll handler
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center 
                 h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* ===== Heading ===== */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold 
                   leading-snug sm:leading-tight text-white"
      >
        Hi, I'm{" "}
        <span className="text-purple-400 animate-glow">Sahil</span>
      </motion.h1>

      {/* ===== Subtitle ===== */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl 
                   text-gray-300 max-w-lg sm:max-w-2xl leading-relaxed"
      >
        A Full-Stack Developer crafting modern, responsive & meaningful digital
        experiences.
      </motion.p>

      {/* ===== Buttons ===== */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <a
        href="#projects"
          className="px-6 py-3 sm:px-8 sm:py-3 bg-purple-600 hover:bg-purple-700 
                     rounded-lg font-medium text-sm sm:text-base 
                     transition duration-300 cursor-pointer w-full sm:w-auto"
        >
          View Projects
        </a>

        <a
        href="#contact"
          className="px-6 py-3 sm:px-8 sm:py-3 border border-purple-500 
                     hover:bg-purple-700/20 rounded-lg font-medium text-sm sm:text-base 
                     transition duration-300 cursor-pointer w-full sm:w-auto"
        >
          Contact Me
        </a>
      </motion.div>

      {/* ===== Scroll Down Indicator ===== */}
      <motion.div
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={
          showContent
            ? {
                opacity: 1,
                y: [0, 10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : {}
        }
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-10 flex flex-col items-center text-gray-400 cursor-pointer hover:text-purple-400 transition-colors duration-300"
      >
        <FaChevronDown className="text-2xl sm:text-3xl" />
        <span className="text-xs sm:text-sm mt-1">Scroll Down</span>
      </motion.div>
    </section>
  );
}
