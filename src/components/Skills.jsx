import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  ];

  const frontend = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind",
    "Bootstrap",
    "Material UI",
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST API",
    "JWT",
    "Mongoose",
  ];

  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-4rem)] px-6 sm:px-10 md:px-20 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 relative text-center animate-glow"
      >
        Technical Skills
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[3px] bg-linear-to-r from-purple-500 to-transparent rounded-full"></span>
      </motion.h2>

      {/* ===== Background container for moving cards ===== */}
      <div className="relative w-full mb-14 py-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.15)] overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center 
                         min-w-[90px] sm:min-w-[130px] md:min-w-[180px]
                         p-3 sm:p-5 md:p-6 rounded-2xl
                         bg-white/5 border border-white/10 backdrop-blur-sm 
                         hover:border-purple-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                         transition-all duration-300 cursor-pointer group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                {skill.icon}
              </div>
              <p className="text-white/90 font-medium text-xs sm:text-sm md:text-base group-hover:text-purple-400 transition-all duration-200">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== Frontend / Backend Cards ===== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
        {/* ===== Frontend Card (smooth left to center) ===== */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-2xl 
                     p-6 sm:p-8 backdrop-blur-sm hover:border-purple-400 hover:bg-white/10 
                     hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-4 text-center">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-start gap-3">
            {frontend.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 text-white text-sm sm:text-base rounded-full border border-white/10 hover:bg-purple-600/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ===== Backend Card (smooth right to center) ===== */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-2xl 
                     p-6 sm:p-8 backdrop-blur-sm hover:border-purple-400 hover:bg-white/10 
                     hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-4 text-center">
            Backend
          </h3>
          <div className="flex flex-wrap justify-start gap-3">
            {backend.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 text-white text-sm sm:text-base rounded-full border border-white/10 hover:bg-purple-600/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
