import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.15,
        },
    },
};


const ringVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};


const badgeVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
};

const imageVariants = {
  visible: {
    y: [0, -10, 0], // Subtle up and down infinite motion
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: { duration: 0.3 },
  },
};

const orbitVariants = (duration, reverse = false) => ({
  rotate: {
    rotate: reverse ? [360, 0] : [0, 360], // Allow reverse direction for variety
    transition: { duration, repeat: Infinity, ease: 'linear' },
  },
});

const devStyle1="absolute top-1/2 left-1/2 w-full h-full max-w-[calc(80%)] max-h-[calc(80%)] -translate-x-1/2 -translate-y-1/2"

const devStyle2="absolute top-1/2 left-1/2 w-full h-full max-w-[calc(75%)] max-h-[calc(75%)] -translate-x-1/2 -translate-y-1/2"

const devStyle3="absolute top-1/2 left-1/2 w-full h-full max-w-[calc(70%)] max-h-[calc(70%)] -translate-x-1/2 -translate-y-1/2"

const logoStyle="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 sm:w-7 sm:h-7 bg-white/90 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(249,115,22,0.4)] hover:scale-110 transition-transform duration-300"

const imgStyle="rounded-full w-full h-full object-contain"

const logos = [
  { src: "./src/assets/html.png", alt: "html-logo", duration: 17, reverse: false, style: devStyle1 },
  { src: "./src/assets/css.png", alt: "css-logo", duration: 25, reverse: true, style: devStyle1 },
  { src: "./src/assets/js.png", alt: "js-logo", duration: 13, reverse: false, style: devStyle2 },
  { src: "./src/assets/atom.png", alt: "react-logo", duration: 18, reverse: true, style: devStyle3 },
  { src: "./src/assets/tailwind.png", alt: "tailwind-logo", duration: 25, reverse: false, style: devStyle3 },
  { src: "./src/assets/bootstrap.png", alt: "bootstrap-logo", duration: 20, reverse: false, style: devStyle1 },
  { src: "./src/assets/github.png", alt: "github-logo", duration: 15, reverse: true, style: devStyle2 },
];

const Right = () => {
    return (
        <motion.div
            className="relative flex items-center justify-center w-full md:w-1/2 h-auto p-4 sm:p-5 md:p-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.div
                className="rounded-full border-orange-600/50 border-2 p-4 shadow-[0_0_20px_rgba(249,115,22,0.3)]" 
                variants={ringVariants}

            >

                <motion.div
                    className="bg-orange-600/20 backdrop-blur-sm text-white p-6 rounded-full"
                    variants={ringVariants}
                >

                    <motion.img
                        src="./src/assets/p5.jpg"
                        className="rounded-full object-cover z-50 bg-orange-600/50 shadow-[0_0_15px_rgba(249,115,22,0.4)] w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" 
                        alt="profile-pic"
                        variants={imageVariants}
                        animate="visible"
                        whileHover="hover"

                    />
                </motion.div>
            </motion.div>

            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className={logo.style}
                variants={orbitVariants(logo.duration, logo.reverse)}
                animate="rotate"
              >
                <motion.div className={logoStyle} whileHover={{ scale: 1.1 }}>
                  <img className={imgStyle} src={logo.src} alt={logo.alt} />
                </motion.div>
              </motion.div>
            ))}

        </motion.div>
    );
};

export default Right;