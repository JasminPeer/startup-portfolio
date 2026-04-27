import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Zades T-Shirts",
    category: "E-commerce Website",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "https://jasminpeer.github.io/zades_tshirts/"
  },
  {
    id: 2,
    title: "Intelligent Student Progress",
    category: "Web App / Platform",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    link: "https://intelligient-student-progress-minin.vercel.app/"
  },
  {
    id: 3,
    title: "Sapdhars",
    category: "Business Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    link: "https://sapdhars.vercel.app/"
  },
  {
    id: 4,
    title: "Sree Bhagavathy Clothing",
    category: "E-commerce Website",
    image: "https://images.pexels.com/photos/29210804/pexels-photo-29210804.jpeg?_gl=1*fw1rwj*_ga*MTc4OTU5MDU5Mi4xNzc3MzEwNjIw*_ga_8JE65Q40S6*czE3NzczMTA2MjAkbzEkZzEkdDE3NzczMTA2MjEkajU5JGwwJGgw",
    link: "https://sree-bhagavathy-clothing.vercel.app/"
  },
  {
    id: 5,
    title: "Smart Learning",
    category: "Educational Platform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "https://smart-learning-frontend.onrender.com/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Featured Work</h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            A selection of our recent digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden block ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square lg:aspect-[4/5]'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-textMain/90 via-textMain/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-indigo-300 font-medium tracking-wide text-sm uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
    
