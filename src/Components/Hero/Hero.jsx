import React from 'react';
import { HERO_CONTENT } from '../../constants';
import profilePic from '../../assets/profile.jpg'
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="pt-24 border-b border-neutral-900  pb-8 lg:mb-35 lg:pb-16"> {/* Adjusted padding for larger screens */}
      <div className="flex flex-wrap px-4 lg:px-14">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:mt-[15%] lg:items-start px-4 lg:px-14 lg:pr-20">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl lg:text-7xl font-thin tracking-tight text-white"> {/* Responsive font size */}
            
              Sahil Shinde
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent pb-6"> {/* Responsive font size */}
            
              MERN Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-base lg:text-lg text-gray-400 lg:max-w-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2  lg:p-8">
        <div className='flex justify-center'>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Profile"
            className="rounded-lg shadow-lg max-w-xs lg:max-w-lg lg:ml-10" 
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
