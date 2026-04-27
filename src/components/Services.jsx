import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build fast, responsive, and highly scalable web applications. Our team leverages the latest technologies to create stunning digital experiences tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    reverse: false,
  },
  {
    id: 2,
    title: "App Development",
    description: "Transform your ideas into powerful mobile applications. We design and develop intuitive, user-friendly apps for iOS and Android that keep your audience engaged.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    reverse: true,
  },
  {
    id: 3,
    title: "Poster / Branding",
    description: "Craft a unique identity with our creative branding solutions. From logo design to marketing materials, we ensure your brand stands out in a crowded market.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    reverse: false,
  },
  {
    id: 4,
    title: "Video Editing",
    description: "Tell your story with compelling video content. Our video editing services bring your vision to life with professional cuts, color grading, and dynamic effects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    reverse: true,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Our Services</h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${service.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-textMain mb-6">{service.title}</h3>
                <p className="text-lg text-textSecondary leading-relaxed mb-8">
                  {service.description}
                </p>
                <div>
                  <a href="#contact" className="inline-flex items-center font-semibold text-accent hover:text-indigo-700 transition-colors group">
                    Learn more
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
