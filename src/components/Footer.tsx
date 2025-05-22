
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold mb-4 inline-block">
              <span className="text-primary">Carve</span>
              <span className="text-white">studio</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Dedicated to promoting the African Renaissance through visually stunning effects, showcasing the diversity and richness of African culture.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-primary" />
                <a href="tel:+233202115651" className="text-gray-300 hover:text-primary transition-colors">
                  +233 20 211 5651
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-primary" />
                <a href="mailto:carvestudio10@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  carvestudio10@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-gray-300">
                  Accra, Ghana
                </span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/carvestudioo/?__pwa=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-secondary transition-colors p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1CAmDYnWKG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-secondary transition-colors p-2 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://gh.linkedin.com/company/carvestudioo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-secondary transition-colors p-2 rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/search?q=%23Carvestudio&src=hashtag_click" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-secondary transition-colors p-2 rounded-full"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@carvestudioo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary hover:text-secondary transition-colors p-2 rounded-full"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Carvestudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
