import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white">Projects</motion.h1>
      <div>


        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col items-center lg:items-start lg:flex-row lg:justify-center"> {/* Updated flex settings */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"> {/* Centered the image */}
              <img className="mb-6 rounded"
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 flex flex-col items-center lg:items-start"> {/* Centered the text */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 font-semibold text-white text-center lg:text-left">{project.title}</h5></a>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start"> {/* Centered technology tags */}
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
