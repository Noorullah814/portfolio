import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <motion.footer
      className=' bg-linear-to-b from-[#0A0F1F] to-[#1A1F30] py-10 sm:py-12 px-4 sm:px-8 md:px-20 lg:px-28 relative overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.05),transparent)] pointer-events-none' />
      
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0'>
       
        <motion.div className='flex flex-col items-start' variants={item}>
          <div className='flex items-center gap-3 mb-2'>
            <span className='bg-orange-600 p-2 rounded-full font-bold text-xl text-white'>N</span>
            <h3 className='text-2xl font-bold text-white'>NoOr Ullah</h3>
          </div>
          <p className='text-gray-400 text-sm font-medium'>Frontend Developer • React • UI Motion</p>
        </motion.div>
        
      
        <motion.nav className='flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left' variants={item}>
          <a href="#about" className='text-gray-300 text-sm font-medium hover:text-orange-600 transition-colors duration-300 hover:scale-105'>About</a>
          <a href="#skills" className='text-gray-300 text-sm font-medium hover:text-orange-600 transition-colors duration-300 hover:scale-105'>Skills</a>
          <a href="#projects" className='text-gray-300 text-sm font-medium hover:text-orange-600 transition-colors duration-300 hover:scale-105'>Projects</a>
          <a href="#contact" className='text-gray-300 text-sm font-medium hover:text-orange-600 transition-colors duration-300 hover:scale-105'>Contact</a>
        </motion.nav>
        
        
        <motion.div className='flex gap-4' variants={item}>
          <a href="https://github.com/repos" target="_blank"  className='text-gray-400 hover:text-orange-600 transition-colors duration-300 hover:scale-110'>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/noor-ullah-45642326b/" target="_blank"  className='text-gray-400 hover:text-orange-600 transition-colors duration-300 hover:scale-110'>
            <Linkedin size={20} />
          </a>
          <a href="https://www.threads.com/@itx_noor_148" target="_blank"  className='text-gray-400 hover:text-orange-600 transition-colors duration-300 hover:scale-110'>
            <Instagram size={20} />
          </a>
          <a href="https://x.com/itxnoor148" target="_blank"  className='text-gray-400 hover:text-orange-600 transition-colors duration-300 hover:scale-110'>
            <X size={20} />
          </a>
        </motion.div>
      </div>
      
     
      <motion.hr className='my-6 sm:my-8 border-gray-700' variants={item} />
      <motion.p className='text-center text-gray-400 text-xs font-medium' variants={item}>
        © 2025 NoOr Ullah. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;