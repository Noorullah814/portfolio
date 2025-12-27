import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brackets, Palette, LayoutDashboard, Code, Atom, Wind, Github, Framer } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const skills = [
  { name: 'HTML', level: 'Expert', icon: <Brackets size={40} className='text-orange-600' /> },
  { name: 'CSS', level: 'Expert', icon: <Palette size={40} className='text-orange-600' /> },
  { name: 'Bootstrap', level: 'Advanced', icon: <LayoutDashboard size={40} className='text-orange-600' /> },
  { name: 'JavaScript', level: 'Advanced', icon: <Code size={40} className='text-orange-600' /> },
  { name: 'React.js', level: 'Advanced', icon: <Atom size={40} className='text-orange-600' /> },
  { name: 'Tailwind CSS', level: 'Expert', icon: <Wind size={40} className='text-orange-600' /> },
  { name: 'GitHub', level: 'Proficient', icon: <Github size={40} className='text-orange-600' /> },
  { name: 'Framer-Motion', level: 'Proficient', icon: <Framer size={40} className='text-orange-600' /> },

];

const levelToWidth = {
  Expert: '90%',
  Advanced: '75%',
  Proficient: '60%',
};

const Skills = () => {
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
          <span className='text-white'>My</span> Skills
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='bg-[#1A1F30] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-orange-600/50 transition-shadow duration-300'
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <div className='flex items-center mb-4'>
                {skill.icon}
                <h3 className='text-xl sm:text-2xl font-semibold text-white ml-4'>{skill.name}</h3>
              </div>
              <p className='text-gray-400 text-sm sm:text-base mb-4'>{skill.level}</p>
              <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                <motion.div 
                  className='h-full bg-orange-600' 
                  initial={{ width: 0 }}
                  whileInView={{ width: levelToWidth[skill.level] || '50%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;