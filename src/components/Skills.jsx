// Skills.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brackets, Palette, LayoutDashboard, Code, Atom, Wind, Github, Framer } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Categorizing skills for a structured, dashboard-like presentation
const skillCategories = [
  {
    category: "Core Architecture",
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: <Code size={22} /> },
      { name: 'HTML5', level: 'Expert', icon: <Brackets size={22} /> },
      { name: 'CSS3', level: 'Expert', icon: <Palette size={22} /> },
    ]
  },
  {
    category: "Frameworks & UI",
    skills: [
      { name: 'React.js', level: 'Advanced', icon: <Atom size={22} /> },
      { name: 'Tailwind CSS', level: 'Expert', icon: <Wind size={22} /> },
      { name: 'Bootstrap', level: 'Advanced', icon: <LayoutDashboard size={22} /> },
    ]
  },
  {
    category: "Motion & Version Control",
    skills: [
      { name: 'Framer Motion', level: 'Proficient', icon: <Framer size={22} /> },
      { name: 'GitHub', level: 'Proficient', icon: <Github size={22} /> },
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <motion.section
      ref={ref}
      className='py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0A0F1F] relative overflow-hidden flex justify-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Subtle background mesh gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className='max-w-5xl w-full relative z-10'
        style={{ y }}
        variants={container}
      >
        <div className="mb-12">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>
            Technical <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of my development toolkit, categorized by discipline.
          </p>
        </div>

        {/* The Unified SaaS Dashboard Panel */}
        <div className="bg-[#111827]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {skillCategories.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="flex-1 border-b md:border-b-0 md:border-r border-white/5 last:border-0 p-6 sm:p-8"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                {section.category}
              </h3>
              
              <div className="flex flex-col">
                {section.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={rowItem}
                    className="group relative flex items-center justify-between py-4 px-3 -mx-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    {/* Active vertical line indicator on hover (Left edge) */}
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-orange-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center gap-4">
                      {/* Icon wrapper */}
                      <div className="text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-base sm:text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>

                    {/* Proficiency Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-500 shadow-[0_0_0_rgba(249,115,22,0)] group-hover:shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300" />
                      <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;