import { services } from '../data/services';
import { motion } from 'framer-motion';

const Services = () => {
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
              className="bg-surface border border-surface-border p-8 rounded-md hover:border-accent transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-base-alt border border-surface-border rounded-md flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                <service.icon className="text-accent" size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-heading font-semibold text-text mb-3">
                {service.title}
              </h4>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
