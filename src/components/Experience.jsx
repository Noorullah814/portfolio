import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, Award, ArrowRight, ExternalLink } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Engineer (Intern)",
    company: "Appverse Technologies",
    duration: "2 Months",
    description: "Contributed to production-level codebases by engineering scalable UI components and optimizing rendering performance. Bridged the gap between design and functionality to deliver seamless user experiences.",
    highlights: ["Component Architecture", "Performance Optimization", "Responsive Layouts"],
    certificate: {
      title: "Frontend Engineering Certificate",
      link: "#", // Replace with actual PDF/Image link
    }
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Independent & Freelance",
    duration: "2+ Years",
    description: "Architected and deployed modern web applications from the ground up. Focused on clean code principles, fluid Framer Motion animations, and translating complex logic into intuitive interfaces.",
    highlights: ["Production Deployments", "UI/UX Motion", "State Management"],
  }
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className='py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0A0F1F] relative overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <motion.div 
        className='max-w-4xl mx-auto w-full relative z-10'
        style={{ y }}
      >
        <motion.div className="mb-16" variants={item}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>
            Experience & <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Trajectory</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            My professional journey, focusing on architectural decisions, performance optimizations, and continuous growth.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 md:pl-0">
          
          {/* Vertical Track Line (Hidden on desktop if using alternating layout, but here we use a left-aligned track for SaaS cleanliness) */}
          <div className="absolute left-[15px] sm:left-[31px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                variants={item}
                className="relative md:pl-24 pl-8 sm:pl-12 group"
              >
                {/* Timeline Node/Dot */}
                <div className="absolute left-0 md:left-6 w-8 h-8 rounded-full bg-[#0A0F1F] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 z-10">
                  <Briefcase size={14} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>

                {/* Content Card */}
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-orange-500/30 transition-colors duration-500 shadow-xl relative overflow-hidden">
                  
                  {/* Hover ambient glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-orange-400 font-medium text-base sm:text-lg mt-1">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5 shrink-0 w-fit">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        className="px-3 py-1 text-xs font-semibold tracking-wide text-gray-300 bg-white/5 border border-white/10 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Optional Certificate Attachment */}
                  {exp.certificate && (
                    <div className="relative z-10 pt-6 border-t border-white/10">
                      <a 
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 p-3 pr-5 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300 group/cert"
                      >
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover/cert:text-orange-300">
                          <Award size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Verified Credential</span>
                          <span className="text-sm text-gray-200 font-semibold flex items-center gap-2">
                            {exp.certificate.title}
                            <ExternalLink size={12} className="text-gray-400 group-hover/cert:text-orange-400 transition-colors" />
                          </span>
                        </div>
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;