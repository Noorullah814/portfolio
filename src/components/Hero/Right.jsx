// Right.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Only importing the profile picture
import profilePic from '../../assets/p5.jpg';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageVariants = {
  visible: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Right = () => {
    return (
        <motion.div
            className="relative flex items-center justify-center w-full md:w-1/2 p-4 sm:p-5 md:p-10 max-w-lg mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Subtle ambient glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>

            {/* Professional image wrapper */}
            <motion.div 
                className="relative z-10 p-2.5 rounded-full border border-orange-500/20 bg-white/5 backdrop-blur-sm shadow-2xl shadow-orange-900/40"
                variants={imageVariants}
                animate="visible"
            >
                <img
                    src={profilePic}
                    className="rounded-full object-cover w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-100 lg:h-100 border-2 border-[#0f172a]" 
                    alt="Noor Ullah Profile"
                />
            </motion.div>
        </motion.div>
    );
};

export default Right;