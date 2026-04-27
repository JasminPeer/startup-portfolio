
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_iq1rf99', 'template_9na3xwd', form.current, 'HzuKL2FNiYy6D-IGF')
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-textMain mb-6">
            Let’s Connect & <span className="text-gradient">Set A Meeting</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Ready to bring your ideas to life? Fill out the form below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start justify-center max-w-6xl mx-auto">
          
          {/* Side Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-textMain mb-6">Reach Out Directly</h3>
              <div className="space-y-6">
                <a href="mailto:trivonix@gmail.com" className="flex items-center gap-4 text-textSecondary hover:text-accent transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-lg font-medium">jasminpeer006@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-4 text-textSecondary group cursor-pointer hover:text-accent transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">9047072417</span>
                    <span className="text-lg font-medium">8610694293</span>
                    <span className="text-lg font-medium">8870033308</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seamless Native Form (Replaces Visme for smoothness) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 bg-white p-10 rounded-3xl shadow-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-textMain text-lg focus:outline-none focus:border-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="user_name" className="absolute left-0 top-4 text-textSecondary text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-4 peer-valid:text-sm pointer-events-none">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="user_mobile" 
                    id="user_mobile"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-textMain text-lg focus:outline-none focus:border-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="user_mobile" className="absolute left-0 top-4 text-textSecondary text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-4 peer-valid:text-sm pointer-events-none">
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="relative">
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-textMain text-lg focus:outline-none focus:border-accent transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-textSecondary text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent peer-valid:-top-4 peer-valid:text-sm pointer-events-none">
                  What work do you need from us?
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="px-10 py-4 bg-textMain text-white rounded-full font-bold text-lg hover:bg-accent hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 w-full hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Let\'s Connect'}
                </button>
                {status === 'success' && (
                  <p className="mt-4 text-green-600 font-medium text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600 font-medium text-center">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


