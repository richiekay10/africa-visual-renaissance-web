
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services - Carvestudio';
  }, []);

  const services = [
    {
      title: "Brand Identity",
      description: "We create distinctive brand identities that capture your essence and connect with your audience.",
      details: [
        "Logo Design & Visual Identity",
        "Brand Guidelines & Strategy",
        "Brand Messaging & Positioning",
        "Brand Applications & Collateral"
      ],
      image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Design",
      description: "We craft engaging digital experiences that are both beautiful and functional.",
      details: [
        "Website Design & Development",
        "Mobile App UI/UX Design",
        "Digital Product Design",
        "Motion Graphics & Animations"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    },
    {
      title: "Creative Strategy",
      description: "We develop strategic approaches that align your creative vision with business objectives.",
      details: [
        "Brand Positioning & Strategy",
        "Creative Direction",
        "Market Research & Analysis",
        "Competitive Landscape Analysis"
      ],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80"
    },
    {
      title: "Visual Production",
      description: "We produce high-quality visual assets that tell your brand's story across all platforms.",
      details: [
        "Photography & Art Direction",
        "Video Production & Editing",
        "Social Media Content Creation",
        "Print & Digital Publishing"
      ],
      image: "https://images.unsplash.com/photo-1596102089241-027fc2d75d7a?auto=format&fit=crop&q=80"
    },
    {
      title: "African-Inspired Design",
      description: "We create authentic designs that celebrate African aesthetics and cultural heritage.",
      details: [
        "Cultural Pattern Design",
        "African Typography & Illustration",
        "Contemporary African Art Direction",
        "Cultural Storytelling & Narratives"
      ],
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80"
    },
    {
      title: "Marketing & Promotion",
      description: "We develop marketing materials that amplify your message and drive engagement.",
      details: [
        "Campaign Development & Execution",
        "Promotional Materials & Design",
        "Social Media Strategy",
        "Digital Marketing Assets"
      ],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-gray-200 text-lg">
              We provide comprehensive creative services that help brands make a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-6">How We Can Help You</h2>
            <p className="text-gray-700 text-lg">
              At Carvestudio, we offer a wide range of creative services designed to help your brand stand out in a crowded marketplace. Our approach combines strategic thinking with creative excellence, ensuring that every project we undertake not only looks stunning but also delivers meaningful results.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">✦</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 right-6 bg-primary p-2 rounded w-24 h-24 flex items-center justify-center rotate-3">
                    <span className="text-4xl text-secondary font-bold">✦</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-gray-600">
              We follow a structured process to ensure every project delivers exceptional results.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description: "We start by understanding your brand, audience, and objectives through in-depth research and collaborative discovery sessions."
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Based on our findings, we develop a comprehensive strategy that aligns creative direction with your business goals."
              },
              {
                step: "03",
                title: "Creative Development",
                description: "Our team creates innovative concepts and design directions that bring your vision to life with a distinctly African perspective."
              },
              {
                step: "04",
                title: "Refinement & Execution",
                description: "We refine our concepts based on feedback, then meticulously execute every detail to create a cohesive final product."
              },
              {
                step: "05",
                title: "Launch & Evaluation",
                description: "We support the launch of your project and evaluate its performance to ensure it meets and exceeds expectations."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-16 md:mb-24 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Circle on timeline */}
                  <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                  
                  {/* Step Number for Mobile */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-secondary font-bold">{process.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 !== 0 ? 'md:text-right' : ''
                  }`}>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="hidden md:block text-3xl font-bold text-primary mb-3">{process.step}</div>
                      <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on alternating sides */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to start your creative journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our comprehensive creative services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
          >
            Get Started <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
