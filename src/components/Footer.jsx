import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Reusable styling for premium glassmorphic social icons
const socialLinkStyle = "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300 hover:scale-110";

const Footer = () => {
  // Automatically updates the copyright year
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className='bg-[#0A0F1F] border-t border-white/10 pt-16 pb-8 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Ambient Floor Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-600/10 rounded-[100%] blur-[80px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        
        {/* Main Content: Stacks centered on mobile, spreads apart on desktop */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0'>
          
          {/* Brand Section */}
          <motion.div className='flex flex-col items-center md:items-start' variants={item}>
            <div className='flex items-center gap-3 mb-3'>
              {/* Upgraded Logo Presentation */}
              <div className='w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20'>
                <span className='font-bold text-xl text-white'>N</span>
              </div>
              <h3 className='text-2xl font-bold text-white tracking-tight'>NoOr Ullah</h3>
            </div>
            <p className='text-gray-400 text-sm font-medium text-center md:text-left'>
              Frontend Developer &bull; React &bull; UI Motion
            </p>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.nav className='flex flex-wrap justify-center gap-6 sm:gap-8' variants={item}>
            {['About', 'Skills', 'Projects','Experience', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className='text-gray-400 text-sm font-medium hover:text-white transition-colors duration-300 relative group'
              >
                {link}
                {/* Underline expanding animation on hover */}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </motion.nav>
          
          {/* Social Links */}
          <motion.div className='flex gap-4' variants={item}>
            <a href="https://github.com/Noorullah814" target="_blank" rel="noreferrer" className={socialLinkStyle}>
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/noor-ullah-45642326b/" target="_blank" rel="noreferrer" className={socialLinkStyle}>
              <Linkedin size={18} />
            </a>
            <a href="https://www.threads.com/@itx_noor_148" target="_blank" rel="noreferrer" className={socialLinkStyle}>
              <Instagram size={18} />
            </a>
            <a href="https://x.com/itxnoor148" target="_blank" rel="noreferrer" className={socialLinkStyle}>
              <X size={18} />
            </a>
          </motion.div>
        </div>
        
        {/* Divider and Copyright Area */}
        <motion.div 
          variants={item} 
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className='text-gray-500 text-xs sm:text-sm font-medium text-center sm:text-left'>
            &copy; {currentYear} NoOr Ullah. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm font-medium text-center sm:text-right flex items-center">
            Crafted with <span className="text-orange-500 mx-1.5">&hearts;</span> and Framer Motion
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;