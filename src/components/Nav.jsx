import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Floating Glassmorphic Container */}
        <div className={`flex justify-between items-center px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-[#111827]/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          
          {/* Brand Logo - Matched to Footer */}
          <a href="#" className='flex items-center gap-3 group'>
            <div className='w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300'>
              <span className='font-bold text-xl text-white'>N</span>
            </div>
            <span className='font-bold text-xl sm:text-2xl text-white tracking-tight'>NoOr Ullah</span>
          </a>
          
          {/* Desktop Links - Encapsulated Pill Design */}
          <div className='hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1'>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className='text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300'
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA Button & Mobile Toggle */}
          <div className='flex items-center gap-4'>
            <a 
              href="#contact" 
              className='hidden md:flex items-center gap-2 text-sm font-medium text-white bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500 hover:border-orange-500 px-5 py-2.5 rounded-full transition-all duration-300 group'
            >
              Let's Talk
              <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
            </a>
            
            <button 
              className='md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors' 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='absolute top-full left-4 right-4 mt-2 bg-[#111827]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden'
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className='text-gray-300 font-medium px-4 py-3 rounded-xl hover:text-white hover:bg-white/10 transition-all duration-300'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className='mt-2 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 rounded-xl font-medium shadow-lg shadow-orange-500/25'
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;