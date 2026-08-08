import { Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { motion } from 'framer-motion';

const About = () => {
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
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                alt={siteConfig.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface border border-surface-border p-6 rounded-md z-20 shadow-xl">
              <p className="text-4xl font-heading font-semibold text-accent mb-1">10+</p>
              <p className="text-text-muted text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm text-accent uppercase tracking-widest font-medium mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-text mb-6">
              Registered Land Surveyor offering comprehensive land consultation.
            </h3>
            
            <div className="space-y-4 text-text-muted mb-8 leading-relaxed">
              <p>
                I am a professional land surveyor based in {siteConfig.location}, specializing in boundary consultation, topographical mapping, and full cadastral survey execution.
              </p>
              <p>
                With a deep understanding of Nepal's land regulations and technical surveying requirements, I provide accurate, legally compliant, and reliable data for individuals, businesses, and government projects. Whether you are buying land, planning a hydropower project, or resolving a boundary dispute, I am here to guide you through the process.
              </p>
            </div>

            <a 
              href="/cv.pdf" 
              className="inline-flex items-center gap-2 border border-surface-border hover:border-accent text-text px-6 py-3 rounded-md transition-colors"
            >
              <Download size={18} className="text-accent" />
              Download CV
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
