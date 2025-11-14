import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constant";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // 👈 mobile tap overlay state

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] px-6 sm:px-10 md:px-20 py-20 flex flex-col items-center justify-center"
    >
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 relative text-center animate-glow"
      >
        My Projects
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[3px] bg-linear-to-r from-purple-500 to-transparent rounded-full"></span>
      </motion.h2>

      {/* ===== Project Cards Grid ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        {displayedProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            onClick={() => {
              // mobile tap detection
              if (window.innerWidth < 768) {
                setOpenIndex(openIndex === i ? null : i);
              }
            }}
            className="relative group rounded-2xl overflow-hidden 
                       bg-white/5 border border-white/10 backdrop-blur-md
                       hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                       transition-all duration-300 w-full cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech?.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full 
                               border border-white/10 hover:bg-purple-600/30 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Overlay — hover on desktop, tap on mobile */}
            <div
              className={`
                absolute inset-0 bg-black/70 flex items-center justify-center gap-6 
                transition-all duration-500

                ${
                  openIndex === i
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }

                sm:opacity-0 sm:pointer-events-none 
                sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto
              `}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-2xl hover:scale-110 transition-all"
              >
                <FaGithub />
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-2xl hover:scale-110 transition-all"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Explore More Button ===== */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 px-6 py-3 bg-purple-600 hover:bg-purple-700 
                     rounded-lg font-medium text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]
                     transition-all duration-300 cursor-pointer"
        >
          Explore More
        </button>
      )}
    </section>
  );
}
