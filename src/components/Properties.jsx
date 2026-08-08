import { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Properties = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProperties = properties.filter(prop => {
    const matchType = filterType === 'All' || prop.type === filterType;
    const matchStatus = filterStatus === 'All' || prop.status === filterStatus;
    return matchType && matchStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'For Sale': return 'bg-accent/10 text-accent border-accent/20';
      case 'Available': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Sold': return 'bg-surface-border text-text-muted border-surface-border';
      default: return 'bg-surface-border text-text';
    }
  };

  const openProperty = (prop) => {
    setSelectedProperty(prop);
    setCurrentImageIndex(0);
  };

  const closeProperty = () => {
    setSelectedProperty(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProperty.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
    }
  };

  return (
    <section id="properties" className="py-24 bg-base-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm text-accent uppercase tracking-widest font-medium mb-3">Real Estate</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-text mb-4">
            Available Land & Properties
          </h3>
          <p className="text-text-muted">
            Explore our curated selection of verified land parcels and properties for sale.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-12"
        >
          <div className="flex space-x-2 bg-surface p-1 rounded-md border border-surface-border overflow-x-auto">
            {['All', 'Land', 'House'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${filterType === type ? 'bg-base-alt text-text shadow-sm border border-surface-border' : 'text-text-muted hover:text-text'}`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex space-x-2 bg-surface p-1 rounded-md border border-surface-border overflow-x-auto">
            {['All', 'For Sale', 'Available', 'Sold'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${filterStatus === status ? 'bg-base-alt text-text shadow-sm border border-surface-border' : 'text-text-muted hover:text-text'}`}
              >
                {status}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop, index) => (
            <motion.div 
              key={prop.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-surface-border rounded-md overflow-hidden hover:border-accent/50 transition-all cursor-pointer shadow-sm hover:shadow-md group flex flex-col"
              onClick={() => openProperty(prop)}
            >
              <div className="w-full h-56 bg-base-alt relative overflow-hidden">
                {prop.images && prop.images.length > 0 ? (
                  <img 
                    src={prop.images[0]} 
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-base-alt flex items-center justify-center">
                    <span className="text-text-muted text-xs">No Image</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-xs px-3 py-1 font-medium rounded-full bg-surface shadow-sm border ${getStatusColor(prop.status)}`}>
                    {prop.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{prop.type}</span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-text mb-2 line-clamp-2">{prop.title}</h4>
                  <p className="text-text font-medium mb-3">{prop.price}</p>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">{prop.description}</p>
                </div>
                
                <div className="flex items-center pt-4 border-t border-surface-border/50 text-text-muted text-sm mt-auto">
                  <MapPin size={16} className="mr-2 text-accent" />
                  <span className="truncate">{prop.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center py-12 text-text-muted">
              No properties found matching the selected filters.
            </div>
          )}
        </div>

      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-base/80 backdrop-blur-sm"
            onClick={closeProperty}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="max-w-5xl w-full max-h-[90vh] bg-surface border border-surface-border rounded-lg overflow-y-auto shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-surface-border sticky top-0 bg-surface z-20">
                <h3 className="font-heading font-semibold text-xl text-text truncate pr-4">{selectedProperty.title}</h3>
                <button 
                  onClick={closeProperty}
                  className="p-2 text-text-muted hover:text-text hover:bg-base rounded-md transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col md:flex-row flex-grow">
                {/* Image Carousel */}
                <div className="w-full md:w-1/2 relative bg-base-alt min-h-[300px] flex items-center justify-center group">
                  {selectedProperty.images && selectedProperty.images.length > 0 ? (
                    <>
                      <img 
                        src={selectedProperty.images[currentImageIndex]} 
                        alt={`${selectedProperty.title} image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover max-h-[500px]"
                      />
                      {selectedProperty.images.length > 1 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-surface/80 hover:bg-surface text-text rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-surface/80 hover:bg-surface text-text rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronRight size={24} />
                          </button>
                          <div className="absolute bottom-4 left-1/2 -translate-y-1/2 flex gap-2">
                            {selectedProperty.images.map((_, idx) => (
                              <div 
                                key={idx} 
                                className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-accent' : 'bg-surface-border'}`} 
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <span className="text-text-muted">No Images</span>
                  )}
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-sm px-3 py-1 font-medium rounded-full bg-base border ${getStatusColor(selectedProperty.status)}`}>
                      {selectedProperty.status}
                    </span>
                    <span className="text-sm font-medium uppercase tracking-wider text-accent">{selectedProperty.type}</span>
                  </div>
                  
                  <p className="text-2xl font-bold text-text mb-6">{selectedProperty.price}</p>
                  
                  <div className="flex items-start text-text-muted mb-6">
                    <MapPin size={20} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{selectedProperty.location}</span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-heading font-semibold text-text mb-3">Description</h4>
                    <p className="text-sm text-text-muted leading-relaxed whitespace-pre-line">
                      {selectedProperty.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href="#contact" 
                      onClick={closeProperty}
                      className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Inquire About This Property
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Properties;
