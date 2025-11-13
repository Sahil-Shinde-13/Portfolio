import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] px-5 sm:px-10 md:px-20 py-14 sm:py-16 flex overflow-hidden flex-col items-center justify-center"
    >
      {/* ===== Heading (always on top) ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-10 relative text-center w-full animate-glow"
      >
        About Me
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[3px] bg-linear-to-r from-purple-500 to-transparent rounded-full"></span>
      </motion.h2>

      {/* ===== Content Wrapper (Image + Text) ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* ===== Image ===== */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-44 sm:w-56 md:w-72 aspect-square rounded-full overflow-hidden 
                     border-4 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] mx-auto md:mx-0"
        >
          <img
            src="/1614172293300.jpeg"
            alt="Sahil Shinde"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* ===== Text Section ===== */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl text-center md:text-left"
        >
          {/* Paragraph 1 */}
          <p className="text-gray-300 text-[15px] sm:text-lg leading-7 sm:leading-relaxed mb-4 sm:mb-5 max-w-md mx-auto md:mx-0">
            I'm <span className="text-purple-400 font-semibold">Sahil Shinde</span>, a 
            <span className="text-purple-400 font-semibold"> Full-Stack Developer</span> passionate about 
            building beautiful and functional web applications. I enjoy designing clean, modern interfaces 
            and creating powerful backends that bring ideas to life.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-300 text-[15px] sm:text-lg leading-7 sm:leading-relaxed mb-7 sm:mb-8 max-w-md mx-auto md:mx-0">
            My journey started with curiosity about how websites work, which grew into a love for solving 
            problems through code. I focus on clean design, performance, and user experience — constantly 
            learning and improving along the way.
          </p>

          {/* Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 
                       rounded-lg font-medium transition-all text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
