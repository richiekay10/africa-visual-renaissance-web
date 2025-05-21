import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Carvestudio - Creative Agency for the African Renaissance';
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const services = [
    {
      title: "Brand Identity",
      description: "We create distinct and memorable brand identities that resonate with your audience and stand the test of time.",
      icon: "✦"
    },
    {
      title: "Digital Design",
      description: "Our digital design solutions are engaging, user-friendly, and optimized for modern digital experiences.",
      icon: "◈"
    },
    {
      title: "Creative Strategy",
      description: "We develop comprehensive creative strategies that align with your business goals and target audience.",
      icon: "◆"
    },
    {
      title: "Visual Storytelling",
      description: "We craft compelling visual narratives that communicate your brand's unique story and values.",
      icon: "❖"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                } 
              }
            }}
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Promoting the <span className="text-primary">African Renaissance</span> through visually stunning effects
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-200 text-lg md:text-xl mb-8"
            >
              We showcase the diversity and richness of African culture while highlighting the continent's modern achievements and aspirations.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded font-medium transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/portfolio" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                We Create <span className="text-primary">Distinctive</span> and <span className="text-primary">Unforgettable</span> Identities
              </h2>
              <p className="text-gray-700 mb-6">
                As an ambitious creative agency, we specialize in creating distinctive and unforgettable identities for our clients. We accomplish this by conducting a thorough analysis of each project, and seamlessly integrating all aspects into a cohesive and inspiring final product.
              </p>
              <p className="text-gray-700 mb-8">
                Our process is grounded in knowledge and creativity, and we are able to establish new brands or revitalize existing ones with our expertise.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
              >
                Learn more about us <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Creative team collaborating"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-gray-600">
              We provide comprehensive creative services to help your brand stand out and make an impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-secondary px-6 py-3 rounded font-medium transition-colors"
            >
              All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to bring your vision to life?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something remarkable that celebrates the African spirit and pushes creative boundaries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
          >
            Contact Us Today <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
