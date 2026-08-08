import { siteConfig } from '../data/siteConfig';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-alt border-t border-surface-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block font-heading font-semibold text-2xl text-accent mb-4">
              ICC<span className="text-text">.</span>
            </a>
            <p className="text-text-muted mb-6 text-sm leading-relaxed">
              {siteConfig.subheading}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.socialLinks.linkedin} className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href={siteConfig.socialLinks.facebook} className="text-text-muted hover:text-accent transition-colors" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href={siteConfig.socialLinks.instagram} className="text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href={siteConfig.socialLinks.youtube} className="text-text-muted hover:text-accent transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href={siteConfig.socialLinks.whatsapp} className="text-text-muted hover:text-accent transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Information Links */}
          <div>
            <h4 className="text-text font-heading font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-text-muted hover:text-accent text-sm transition-colors">About Me</a></li>
              <li><a href="#gallery" className="text-text-muted hover:text-accent text-sm transition-colors">Projects</a></li>
              <li><a href="#faq" className="text-text-muted hover:text-accent text-sm transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-accent text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-text font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-text-muted hover:text-accent text-sm transition-colors">Land Purchase & Sale</a></li>
              <li><a href="#services" className="text-text-muted hover:text-accent text-sm transition-colors">Land Consultation</a></li>
              <li><a href="#services" className="text-text-muted hover:text-accent text-sm transition-colors">Cadastral Survey</a></li>
              <li><a href="#services" className="text-text-muted hover:text-accent text-sm transition-colors">Topographical Survey</a></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h4 className="text-text font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>{siteConfig.location}</li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">{siteConfig.email}</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-surface-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
