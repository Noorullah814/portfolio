// Projects.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Assuming you are using the Vite imports we established earlier
import proj1 from '../assets/project4.png';
import proj2 from '../assets/project.png';
import proj3 from '../assets/project3.png';
import proj4 from '../assets/project2.png';
import proj5 from '../assets/project5.png';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Added 'tech' arrays to simulate modern SaaS feature tags
const projects = [
  { 
    title: 'Personal Portfolio', 
    desc: 'A responsive professional portfolio showcasing skills and projects with seamless animations.', 
    img: proj1, 
    demoLink: 'https://yourportfolio.com', 
    repoLink: 'https://github.com/yourusername/portfolio',
    tech: ['React', 'Tailwind', 'Framer']
  },
  { 
    title: 'Banking Site', 
    desc: 'Professional Banking site featuring a premium UI, complex layouts, and responsive design.', 
    img: proj2, 
    demoLink: 'https://noorullah814.github.io/banker-website/', 
    repoLink: 'https://github.com/Noorullah814/banker-website',
    tech: ['HTML5', 'CSS3', 'JS']
  },
  { 
    title: 'Netflix Login Clone', 
    desc: 'Pixel-perfect Netflix login page clone with fluid animations and form validation.', 
    img: proj3, 
    demoLink: 'https://netflixclone.com', 
    repoLink: 'https://github.com/yourusername/netflix-clone',
    tech: ['React', 'CSS Modules']
  },
  { 
    title: 'Legacy Portfolio', 
    desc: 'An earlier iteration of a responsive professional portfolio demonstrating structural growth.', 
    img: proj4, 
    demoLink: 'https://noorullah814.github.io/', 
    repoLink: 'https://github.com/Noorullah814/Noorullah814.github.io',
    tech: ['Bootstrap', 'JS']
  },
  { 
    title: 'Note App', 
    desc: 'Mini Note application for daily task management with local storage integration.', 
    img: proj5, 
    demoLink: 'https://noorullah814.github.io/React-Notes-App/', 
    repoLink: 'https://github.com/Noorullah814/React-Notes-App',
    tech: ['React', 'State Management']
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.section
      ref={ref}
      className='py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0A0F1F] relative overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Subtle ambient glows for depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className='max-w-6xl mx-auto w-full relative z-10'
        style={{ y }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={item}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of my recent work, from pixel-perfect UI clones to full-scale web applications.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className='group relative bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col overflow-hidden hover:border-orange-500/40 transition-all duration-500 shadow-xl'
              variants={item}
            >
              {/* Outer ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image Container with Zoom Effect */}
              <div className='relative h-56 w-full overflow-hidden border-b border-white/5'>
                <div className="absolute inset-0 bg-[#0f172a]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className='w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out' 
                />
              </div>
              
              {/* Content Container */}
              <div className='flex flex-col flex-grow p-6 sm:p-8 relative z-20'>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((techItem, techIndex) => (
                    <span key={techIndex} className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-md">
                      {techItem}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-gray-100 mb-3 group-hover:text-orange-400 transition-colors duration-300'>{proj.title}</h3>
                <p className='text-gray-400 text-sm sm:text-base leading-relaxed mb-8 flex-grow'>{proj.desc}</p>
                
                {/* Action Buttons */}
                <div className='flex items-center gap-4 mt-auto'>
                  <a 
                    href={proj.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className='flex-1 bg-white/5 hover:bg-orange-600 text-gray-200 hover:text-white border border-white/10 hover:border-orange-600 px-4 py-2.5 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300'
                  >
                    Live Demo <ExternalLink size={16} className='ml-2' />
                  </a>
                  <a 
                    href={proj.repoLink} 
                    target="_blank"
                    rel="noreferrer" 
                    className='flex-1 bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 px-4 py-2.5 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300'
                  >
                    Source <Github size={16} className='ml-2' />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;