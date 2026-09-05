// Left.jsx
import React from 'react';
import { Linkedin, Instagram, Github, X } from 'lucide-react';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const socialLink = "rounded-full p-2.5 text-gray-400 border border-gray-700 transition-all duration-300 ease-out hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
   },
};

const item = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
   },
};

const Left = () => {
   return (
      <motion.div className='w-full md:w-1/2 flex flex-col p-4 sm:p-6 lg:py-10 gap-5 sm:gap-6'
         variants={container}
         initial="hidden"
         animate="visible"
      >
         <motion.h1 className='font-bold text-4xl sm:text-5xl md:text-6xl font-sans leading-tight tracking-tight text-white'
            variants={item}
         >
            Hello, <br />
            I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>NoOr Ullah</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium block mt-2 h-10">
               <Typewriter
                  words={["A Frontend Developer", "A Full Stack Enthusiast", "A React Specialist"]}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
               />
            </span>
         </motion.h1>

         <motion.p className='text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg'
            variants={item}
         >
            I craft clean, responsive user interfaces with modern frontend tools.
            Focused on performance, usability, and smooth user experiences.
         </motion.p>

         <motion.div className='flex py-2 w-full justify-center md:justify-start'
            variants={item}
         >
            <a href="/Noor_Ullah_resume.pdf"
               download
               target="_blank"
               rel="noreferrer"
               className='text-white font-medium px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-out hover:scale-[0.98] shadow-lg shadow-orange-500/25'
            >
               My Resume
            </a>
         </motion.div>

         <motion.div className='flex py-2 gap-4 items-center justify-center w-full md:justify-start'
            variants={item}
         >
            <a href="https://github.com/Noorullah814" target="_blank" rel="noreferrer" className={socialLink}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/noor-ullah-45642326b/" target="_blank" rel="noreferrer" className={socialLink}><Linkedin size={20} /></a>
            <a href="https://www.threads.com/@itx_noor_148" target="_blank" rel="noreferrer" className={socialLink}><Instagram size={20} /></a>
            <a href="https://x.com/itxnoor148" target="_blank" rel="noreferrer" className={socialLink}><X size={20} /></a>
         </motion.div>
      </motion.div>
   );
}

export default Left;