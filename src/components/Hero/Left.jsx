import React from 'react'
import { Linkedin, Instagram,Github, X } from 'lucide-react'
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


const socialLink = "rounded-full p-2 text-orange-600 border-2 transition-all duration-300 ease-out hover:bg-orange-600 hover:text-white hover:-translate-y-1 ";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
      },
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
      <motion.div className='w-full md:w-1/2 flex flex-col p-4 sm:p-6 lg:py-10 gap-2 sm:gap-5 '
         variants={container}
         initial="hidden"
         animate="visible"
      >
         <motion.h1 className='font-bold text-2xl sm:text-5xl md:text-5xl font-sans leading-tight'
            variants={item}
         >Hello, <br />
            <span className='text-orange-600'>I'm{" "}
               <Typewriter
                  words={["NoOr Ullah"]}
                  loop={0}
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1500}
               />
            </span>
            <br />
            A Frontend Developer
         </motion.h1>
         <motion.p className='text-gray-400 text-base sm:text-lg leading-relaxed'
            variants={item}
         >I craft clean, responsive user interfaces with modern frontend tools.
             Focused on performance, usability, and smooth user experiences.</motion.p>
         <motion.div className='flex gap-4 sm:gap-5 py-4 sm:py-5 justify-center items-center w-full md:w-2/3 md:justify-start '
            variants={item}
         >
            <a href="/Noor_Ullah_resume.pdf"
             download
             target="_blank"
               className='text-white font-medium px-18 sm:px-12 md:px-18 py-3 rounded-full 
             bg-[#d65113] shadow-[0_0_10px_0_rgba(242,101,34,0.5)] text-xl sm:text-2xl transition-all duration-300 ease-out hover:scale-95 hover:shadow-none'>My Resume</a>
           
         </motion.div>
         <motion.div className='flex py-4 sm:py-5 gap-4 sm:gap-5 items-center justify-center  md:justify-start '
            variants={item}
         >
            <a href="https://github.com/repos"  target="_blank" className={socialLink}><Github size={14} className='sm:size-3 md:size-4' /></a>
            <a href="https://www.linkedin.com/in/noor-ullah-45642326b/" target="_blank"  className={socialLink}><Linkedin size={14} className='sm:size-3 md:size-4' /></a>
            <a href="https://www.threads.com/@itx_noor_148" target="_blank"  className={socialLink}><Instagram size={14} className='sm:size-3 md:size-4' /></a>
            <a href="https://x.com/itxnoor148" target="_blank"  className={socialLink}><X size={14} className='sm:size-3 md:size-4' /></a>
         </motion.div>
      </motion.div>
   )
}

export default Left