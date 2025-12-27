import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const overlayVariants = {
  hidden: { opacity: 0, y: '20%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const projects = [
  { title: 'Personal Portfolio', desc: 'A responsive professional portfolio showcasing skills and projects.', img: './src/assets/project4.png', demoLink: 'https://yourportfolio.com', repoLink: 'https://github.com/yourusername/portfolio' },
  { title: 'Banking Site', desc: 'Professional Banking site with Premium UI', img: './src/assets/project.png', demoLink: 'https://noorullah814.github.io/banker-website/', repoLink: 'https://github.com/Noorullah814/banker-website' },
  { title: 'Netflix Login Clone', desc: 'Pixel-perfect Netflix login page clone with animations.', img: './src/assets/project3.png', demoLink: 'https://netflixclone.com', repoLink: 'https://github.com/yourusername/netflix-clone' },
  { title: 'Personal Portfolio', desc: 'A responsive professional portfolio showcasing skills and projects.', img: './src/assets/project2.png', demoLink: 'https://noorullah814.github.io/', repoLink: 'https://github.com/Noorullah814/Noorullah814.github.io' },
  { title: 'Note App', desc: 'Mini Note application for daily task.', img: './src/assets/project5.png', demoLink: 'https://noorullah814.github.io/React-Notes-App/', repoLink: 'https://github.com/Noorullah814/React-Notes-App' },
 
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
      className='py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 lg:px-28 bg-[#0A0F1F]'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div 
        className='max-w-6xl mx-auto bg-[#111827] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12'
        style={{ y }}
      >
        <motion.h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-6 sm:mb-8 text-center' variants={item}>
          <span className='text-white'>My</span> Projects
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className='relative rounded-lg overflow-hidden shadow-lg hover:shadow-orange-600/50 transition-shadow duration-300 group' 
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img src={proj.img} alt={proj.title} className='w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain' />
              
              <motion.div 
                className='absolute inset-0 bg-linear-to-t from-orange-600/90 to-transparent flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                variants={overlayVariants}
                initial="hidden"
                whileHover="visible"
              >
                <h3 className='text-xl sm:text-2xl font-semibold text-white mb-2'>{proj.title}</h3>
                <p className='text-gray-300 text-sm sm:text-base mb-4'>{proj.desc}</p>
                <div className='flex justify-around'>
                  <a href={proj.demoLink} target="_blank" className='bg-orange-600/80 text-white px-3 sm:px-4 py-2 rounded-full flex items-center text-xs sm:text-sm font-medium hover:bg-orange-600 transition-colors'>
                    Demo <ExternalLink size={12} className='ml-2' />
                  </a>
                  <a href={proj.repoLink} target="_blank" className='bg-orange-600/80 text-white px-3 sm:px-4 py-2 rounded-full flex items-center text-xs sm:text-sm font-medium hover:bg-orange-600 transition-colors'>
                    Code <Github size={12} className='ml-2' />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;