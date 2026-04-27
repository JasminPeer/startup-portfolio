
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "DHARSHINI R",
    role: "Client",
    review: "Professional team, fast delivery, great communication. They completely transformed our digital presence.",
  },
  {
    id: 2,
    name: "KARTHIK R",
    role: "Client",
    review: "The level of creativity and technical expertise is unmatched. Highly recommend for any serious project.",
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-4">Client Stories</h2>
          <p className="text-xl text-textSecondary">Don't just take our word for it.</p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-10 rounded-3xl border border-gray-100"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="currentColor" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-xl text-textMain font-medium mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-textMain">{testimonial.name}</h4>
                <p className="text-textSecondary text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
