import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Carvestudio';
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-200 text-lg">
              Get in touch with our team to discuss your creative needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you! Contact us using the information below or connect with us on social media.
              </p>
              
              <div className="space-y-8 mb-12">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+233202115651" 
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      +233 20 211 5651
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:carvestudio10@gmail.com" 
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      carvestudio10@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Office Location</h3>
                    <a 
                      href="https://g.co/kgs/nyNpk6w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      Accra, Ghana
                    </a>
                  </div>
                </div>
                
                {/* Recruitment Team - UPDATED with email link */}
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <Users className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Recruitment Team</h3>
                    <p className="text-gray-700 mb-2">
                      Looking to join our team? Contact our recruitment specialists at{" "}
                      <a 
                        href="mailto:carvestudio10@gmail.com?subject=Recruitment%20Inquiry" 
                        className="text-primary hover:underline"
                      >
                        carvestudio10@gmail.com
                      </a>
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
                      <Link to="/careers">View Open Positions</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/carvestudioo/?__pwa=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-secondary transition-colors p-3 rounded-lg"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1CAmDYnWKG/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-secondary transition-colors p-3 rounded-lg"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://gh.linkedin.com/company/carvestudioo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-secondary transition-colors p-3 rounded-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://twitter.com/search?q=%23Carvestudio&src=hashtag_click" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary hover:text-secondary transition-colors p-3 rounded-lg"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9737574015546!2d-0.18650918904677178!3d5.576368133899815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b269f9767f7%3A0xbbe28b318550fad1!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carvestudio Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours & FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                For urgent inquiries outside business hours, please email us at{" "}
                <a 
                  href="mailto:carvestudio10@gmail.com"
                  className="text-primary hover:underline"
                >
                  carvestudio10@gmail.com
                </a>
              </p>
            </motion.div>
            
            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">What services do you offer?</h4>
                  <p className="text-gray-600">
                    We provide a comprehensive range of creative services including brand identity, digital design, creative strategy, visual production, and marketing materials.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Do you work with clients outside Africa?</h4>
                  <p className="text-gray-600">
                    Yes, while our focus is on promoting African creativity, we collaborate with clients globally who appreciate our unique perspective and approach.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">How long does a typical project take?</h4>
                  <p className="text-gray-600">
                    Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation based on your specific needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
