import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]); 

  return (
    <motion.section
      ref={ref}
      className='py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 lg:px-28 bg-[#0A0F1F]'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div 
        className='max-w-5xl mx-auto bg-[#111827] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12'
        style={{ y }} 
      >
        <motion.h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-6 sm:mb-8 text-center' variants={item}>
          <span className='text-white'>About</span> Me
        </motion.h2>
        <div className='flex flex-col lg:flex-row items-stretch gap-8 md:gap-12 mb-8 sm:mb-10'>
          <motion.img 
            src="./src/assets/p5.jpg"
            alt="Noor Ullah"
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.5)] hover:scale-105 transition-transform duration-300 shrink-0 mx-15 sm:mx-20 md:mx-15'
            variants={item}
          />
          <motion.div className='flex flex-col justify-center flex-1' variants={item}>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6'>
              I'm Noor Ullah, a proffesional frontend developer.
            </p>
            <div>
              <span className='font-bold text-orange-600 text-xl sm:text-2xl block mb-3 sm:mb-4'>My Core Toolkit</span>
              <ul className='list-disc pl-5 text-gray-300 text-base sm:text-lg space-y-2'>
                <li><span className='font-semibold text-white'>Foundation:</span> HTML5, CSS3, JavaScript (ES6+)</li>
                <li><span className='font-semibold text-white'>Frameworks:</span> React.js</li>
                <li><span className='font-semibold text-white'>Styling:</span> Tailwind CSS</li>
                <li><span className='font-semibold text-white'>Motion:</span> Framer Motion, GSAP</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;