import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' }); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(); 
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });
    
    emailjs.sendForm(
      'service_jszyjpf', 
      'template_xjpy6fl', 
      formRef.current,
      'LFFkjJwJlIXf51x7W' 
    )
    .then((result) => {
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, (error) => {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' });
      setIsSubmitting(false);
    });
  };

  return (
    <motion.section
      ref={sectionRef}
      className='py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#0A0F1F] relative overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className='max-w-6xl mx-auto w-full relative z-10'
        style={{ y }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={item}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>
            Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to start a project or have a question? Reach out and let's build something incredible together.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
          
          {/* Left Column: Contact Information Cards */}
          <motion.div variants={item} className='lg:col-span-5 space-y-4'>
            <a 
              href="mailto:itxnoor148@gmail.com"
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-gray-400 text-sm">itxnoor148@gmail.com</p>
                <p className="text-orange-500 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Drop a line &rarr;</p>
              </div>
            </a>

            <a 
              href="tel:+923190414497"
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+92-3190414497</p>
                <p className="text-orange-500 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Call me &rarr;</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                <p className="text-gray-500 text-xs mt-2 font-medium">Available for remote work</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div variants={item} className='lg:col-span-7 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative'>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6 relative z-10'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium text-gray-300 ml-1'>Full Name</label>
                  <input 
                    type='text' 
                    name='from_name' 
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className='w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-black/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300' 
                    required
                  />
                </div>
                
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium text-gray-300 ml-1'>Email Address</label>
                  <input 
                    type='email' 
                    name='from_email' 
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className='w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-black/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300' 
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label htmlFor='message' className='text-sm font-medium text-gray-300 ml-1'>Your Message</label>
                <textarea 
                  name='message' 
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5} 
                  className='w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-black/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300 resize-none' 
                  required
                />
              </div>

              <button 
                type='submit' 
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>

              {status.msg && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium flex items-center justify-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                >
                  {status.msg}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;