import { useState } from 'react';
import { services } from '../data/services';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openService = (e, service) => {
    e.preventDefault();
    setSelectedService(service);
  };

  return (
    <section id="services" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm text-accent uppercase tracking-widest font-medium mb-3">Professional Services</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-text mb-4">
            Expert solutions for your land and surveying needs
          </h3>
          <p className="text-text-muted">
            From preliminary land consultation to precise cadastral mapping, we offer a comprehensive range of surveying services across Nepal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface border border-surface-border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full h-48 relative bg-base-alt overflow-hidden cursor-pointer" onClick={(e) => openService(e, service)}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h4 className="text-xl font-heading font-bold text-text mb-3 cursor-pointer hover:text-accent transition-colors" onClick={(e) => openService(e, service)}>
                  {service.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <button 
                    onClick={(e) => openService(e, service)}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    Learn More 
                    <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-accent transform origin-left scale-x-100 opacity-80 group-hover:scale-x-110 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-base/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-text hover:text-accent transition-colors bg-surface p-2 rounded-full shadow-md z-[70]"
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="max-w-5xl w-full max-h-[90vh] bg-surface border border-surface-border rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-[65]"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Image & Icon */}
              <div className="w-full md:w-1/2 bg-base-alt relative min-h-[250px] md:min-h-full">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    <selectedService.icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-white drop-shadow-md pr-4">{selectedService.title}</h4>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto max-h-[90vh]">
                <span className="inline-block px-3 py-1 rounded-full bg-base border border-surface-border text-accent text-xs font-medium uppercase tracking-wider mb-6 w-fit shrink-0">
                  Detailed Service Overview
                </span>
                
                <div className="text-sm text-text-muted leading-relaxed mb-8">
                  <p className="mb-4 text-text font-medium text-base">
                    {selectedService.description}
                  </p>
                  <p className="whitespace-pre-line">
                    {selectedService.fullDescription}
                  </p>
                </div>
                
                <div className="mb-10">
                  <h5 className="font-heading font-semibold text-text mb-4 text-lg">What's Included:</h5>
                  <ul className="space-y-3">
                    {selectedService.detailedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-4 shrink-0">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-accent hover:bg-accent-hover text-white text-center font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Request this Service
                  </a>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-base hover:bg-base-alt border border-surface-border text-text font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
