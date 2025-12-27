import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';

const navLink = "transition-all duration-300 ease-out hover:text-orange-600 hover:-translate-y-1 block py-2";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className='fixed top-0 left-0 w-full bg-[#0A0F1F] z-50 shadow-md'
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className='flex justify-between items-center px-4 sm:px-8 md:px-20 lg:px-28 py-4 md:py-6 bg-linear-to-b from-[#0A0F1F] to-[#1A1F30]'>
        <div className='flex gap-3 sm:gap-5 items-center'>
          <span className='bg-orange-600 p-2 sm:p-3 rounded-full font-bold font-sans text-xl sm:text-3xl'>N</span>
          <span className='font-bold font-mono text-xl sm:text-4xl overline'>NoOr Ullah</span>
        </div>
       
        <div className='hidden md:flex gap-6 lg:gap-10 text-lg lg:text-xl items-center font-medium'>
          <a href="#about" className={navLink}>About</a>
          <a href="#skills" className={navLink}>Skills</a>
          <a href="#projects" className={navLink}>Projects</a>
          <a href="#contact" className={navLink}>Contact</a>
        </div>
       
        <button className='md:hidden text-white focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
     
      {isOpen && (
        <motion.div
          className='md:hidden bg-[#0A0F1F] px-4 pb-4 flex flex-col items-center gap-4 text-lg font-medium'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#about" className={navLink} onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className={navLink} onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className={navLink} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className={navLink} onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;