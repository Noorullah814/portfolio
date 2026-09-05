// About.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilePic from '../assets/p5.jpg'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Reusable Tailwind classes for the Bento Box aesthetic
const bentoBoxStyle = "bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-all duration-500";
const pillStyle = "px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300 cursor-default";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the entire grid
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]); 

  return (
    <motion.section
      ref={ref}
      className='py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0A0F1F] min-h-screen flex items-center'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div 
        className='max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'
        style={{ y }} 
      >
        
        {/* Bento Box 1: The Bio (Spans 2 columns on desktop) - Reordered for mobile */}
        <motion.div className={`${bentoBoxStyle} md:col-span-2 order-2 md:order-1`} variants={cardVariants}>
          {/* Increased Orange Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 relative z-10'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Me</span>
          </h2>
          
          <p className='text-gray-300 text-base sm:text-lg leading-relaxed relative z-10'>
            I craft high-performance, animated web experiences. With over two years of hands-on experience in frontend development, I bridge the gap between pixel-perfect design and seamless functionality. I specialize in building responsive, scalable applications that users love to interact with, turning complex problems into elegant interfaces.
          </p>
        </motion.div>

        {/* Bento Box 2: Profile Image - Reordered to top for mobile */}
        <motion.div className={`${bentoBoxStyle} p-0 sm:p-0 md:p-0 min-h-[300px] order-1 md:order-2`} variants={cardVariants}>
          <img 
            src={profilePic}
            alt="Noor Ullah"
            className='w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Bento Box 3: Experience Metric */}
        <motion.div className={`${bentoBoxStyle} items-center text-center order-3`} variants={cardVariants}>
          {/* Added centered ambient glow */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2 relative z-10">2<span className="text-orange-500">+</span></h3>
          <p className="text-gray-400 text-lg font-medium uppercase tracking-widest relative z-10">Years Experience</p>
        </motion.div>

        {/* Bento Box 4: Tech Stack (Spans 2 columns) */}
        <motion.div className={`${bentoBoxStyle} md:col-span-2 order-4`} variants={cardVariants}>
          {/* Added bottom-right ambient glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className='font-semibold text-white text-xl sm:text-2xl mb-6 relative z-10'>My Core Toolkit</h3>
          
          <div className='flex flex-col gap-6 relative z-10'>
            {/* Frontend & Frameworks */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Frontend & UI</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className={pillStyle}>React.js</span>
                <span className={pillStyle}>JavaScript (ES6+)</span>
                <span className={pillStyle}>Tailwind CSS</span>
                <span className={pillStyle}>HTML5 / CSS3</span>
              </div>
            </div>

            {/* Animation */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Motion & Animation</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className={pillStyle}>Framer Motion</span>
                <span className={pillStyle}>GSAP</span>
              </div>
            </div>

            {/* Backend / Future Growth */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Backend & Infrastructure</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className={pillStyle}>Node.js</span>
                <span className={pillStyle}>Express</span>
                <span className={pillStyle}>Git / GitHub</span>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default About;