import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Shapes & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #94A3B8 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
        
        {/* Animated glowing orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[5%] left-[2%] w-[45%] h-[45%] bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[80px] opacity-70"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] bg-gradient-to-tl from-blue-100 via-indigo-100 to-cyan-50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[100px] opacity-70"
        />
        
        {/* Abstract 3D-like glass elements */}
        <motion.div
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{ rotate: { duration: 100, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-[15%] right-[10%] w-48 h-48 bg-white/20 backdrop-blur-3xl border border-white/50 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] opacity-80"
          style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ rotate: { duration: 120, repeat: Infinity, ease: "linear" }, x: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-[20%] left-[8%] w-32 h-32 bg-gradient-to-tr from-accent/10 to-purple-400/10 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm"
        >
          <span className="text-accent font-semibold tracking-wide text-sm uppercase">Welcome to Trivonix Creations</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-textMain tracking-tighter leading-[1.05] mb-8 drop-shadow-sm">
            Building Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-pink-500 animate-gradient-x">Experiences</span> That Matter
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-textSecondary font-medium mb-12 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Web • Apps • Design • Motion <br className="md:hidden" /><span className="hidden md:inline"> — </span>All in One Team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#contact" className="px-10 py-5 bg-textMain text-white rounded-full font-bold text-lg hover:bg-accent hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
            Let’s Connect
          </a>
          <a href="#projects" className="px-10 py-5 bg-white/80 backdrop-blur-md text-textMain border-2 border-gray-200 rounded-full font-bold text-lg hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto hover:shadow-lg hover:-translate-y-1">
            Start Your Project
          </a>
        </motion.div>
      </div>
      
      {/* Custom styles for the gradient animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;