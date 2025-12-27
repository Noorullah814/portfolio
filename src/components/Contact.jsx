import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';



const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' }); 

  const formRef = useRef(); 
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs.sendForm(
      'service_jszyjpf', 
      'template_xjpy6fl', 
      formRef.current,
      'LFFkjJwJlIXf51x7W' 
    )
    .then((result) => {
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
    });
  };

  return (
    <motion.section
      ref={sectionRef}
      className='py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 lg:px-28 bg-[#0A0F1F]'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div 
        className='max-w-4xl mx-auto bg-[#111827] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12'
        style={{ y }}
      >
        <motion.h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-6 sm:mb-8 text-center' variants={item}>
          <span className='text-white'>Contact</span> Me
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
          <motion.div variants={item} className='space-y-6'>
            <h3 className='text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4'>Get in Touch</h3>
            <ul className='text-gray-400 space-y-4'>
              <motion.li className='flex items-center' whileHover={{ scale: 1.05, color: '#f97316' }} transition={{ duration: 0.3 }}>
                <Mail size={20} className='mr-3 text-orange-600' /> itxnoor148@gmail.com
              </motion.li>
              <motion.li className='flex items-center' whileHover={{ scale: 1.05, color: '#f97316' }} transition={{ duration: 0.3 }}>
                <Phone size={20} className='mr-3 text-orange-600' /> +92-3190414497
              </motion.li>
              <motion.li className='flex items-center' whileHover={{ scale: 1.05, color: '#f97316' }} transition={{ duration: 0.3 }}>
                <MapPin size={20} className='mr-3 text-orange-600' /> Islamabad, Pakistan
              </motion.li>
            </ul>
          </motion.div>
          <motion.form ref={formRef} onSubmit={handleSubmit} className='space-y-6' variants={item}>
            <div className='relative'>
              <input 
                type='text' 
                name='from_name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-4 pt-6 bg-[#1A1F30] border border-gray-600 rounded-lg text-white focus:border-orange-600 outline-none peer' 
                id='name'
                required
              />
              <label 
                htmlFor='name'
                className={`absolute left-4 top-4 text-gray-400 transition-all duration-300 ease-out peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-[#1A1F30] peer-focus:px-2 peer-focus:scale-75 peer-focus:text-orange-600 ${name ? '-top-3 left-2 bg-[#1A1F30] px-2 scale-75 text-orange-600' : ''}`}
              >
                Your Name
              </label>
            </div>
            <div className='relative'>
              <input 
                type='email' 
                name='from_email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-4 pt-6 bg-[#1A1F30] border border-gray-600 rounded-lg text-white focus:border-orange-600 outline-none peer' 
                id='email'
                required
              />
              <label 
                htmlFor='email'
                className={`absolute left-4 top-4 text-gray-400 transition-all duration-300 ease-out peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-[#1A1F30] peer-focus:px-2 peer-focus:scale-75 peer-focus:text-orange-600 ${email ? '-top-3 left-2 bg-[#1A1F30] px-2 scale-75 text-orange-600' : ''}`}
              >
                Your Email
              </label>
            </div>
            <div className='relative'>
              <textarea 
                name='message' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5} 
                className='w-full p-4 pt-6 bg-[#1A1F30] border border-gray-600 rounded-lg text-white focus:border-orange-600 outline-none peer' 
                id='message'
                required
              />
              <label 
                htmlFor='message'
                className={`absolute left-4 top-4 text-gray-400 transition-all duration-300 ease-out peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-[#1A1F30] peer-focus:px-2 peer-focus:scale-75 peer-focus:text-orange-600 ${message ? '-top-3 left-2 bg-[#1A1F30] px-2 scale-75 text-orange-600' : ''}`}
              >
                Your Message
              </label>
            </div>
            <motion.button 
              type='submit' 
              className='bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium shadow-[0_0_10px_rgba(234,88,12,0.5)] hover:shadow-[0_0_20px_rgba(234,88,12,0.8)] transition-all duration-300'
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
        {status.msg && (
          <motion.p 
            className={`mt-4 text-center ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {status.msg}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;