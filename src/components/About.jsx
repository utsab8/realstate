import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { siteConfig } = useContext(DataContext);
  return (
    <section id="about" className="py-24 bg-base-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image / Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square bg-surface border border-surface-border rounded-md overflow-hidden relative z-10">
              <img 
                src={siteConfig.aboutImage} 
                alt={siteConfig.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface border border-surface-border p-6 rounded-md z-20 shadow-xl flex flex-col gap-4">
              <div>
                <p className="text-3xl font-heading font-semibold text-accent mb-1">10+</p>
                <p className="text-text-muted text-xs uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-full h-px bg-surface-border"></div>
              <div>
                <p className="text-3xl font-heading font-semibold text-accent mb-1">50+</p>
                <p className="text-text-muted text-xs uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="w-full h-px bg-surface-border"></div>
              <div>
                <p className="text-3xl font-heading font-semibold text-accent mb-1">120+</p>
                <p className="text-text-muted text-xs uppercase tracking-wider">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm text-accent uppercase tracking-widest font-medium mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-text mb-6">
              {siteConfig.aboutTitle}
            </h3>
            
            <div className="space-y-4 text-text-muted mb-8 leading-relaxed text-justify whitespace-pre-line">
              {siteConfig.aboutText}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
