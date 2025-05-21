
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us - Carvestudio';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-gray-200 text-lg">
              We are dedicated to promoting the African Renaissance through visually stunning creative work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">Our Mission & Vision</h2>
              <p className="text-gray-700 mb-6">
                At Carvestudio, our mission is to showcase the diversity and richness of African culture while highlighting the continent's modern achievements and aspirations. We believe in the power of visual communication to reshape narratives and create meaningful connections.
              </p>
              <p className="text-gray-700 mb-6">
                Our vision is to be at the forefront of the African creative renaissance, inspiring a new generation of designers, creators, and brands to embrace and celebrate African heritage and innovation.
              </p>
              <p className="text-gray-700">
                We are committed to creating visually stunning experiences that bridge tradition and modernity, telling compelling stories that resonate with global audiences while maintaining authentic African perspectives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80"
                  alt="Our mission and vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg w-32 h-32 flex items-center justify-center">
                <span className="text-5xl text-secondary font-bold">✦</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Our Approach</h2>
            <p className="text-gray-600">
              We believe in a strategic and thoughtful approach to every project, ensuring each detail contributes to the overall creative vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Research & Discovery",
                description: "We begin by thoroughly understanding your brand, audience, and objectives to ensure our creative direction is purposeful and effective."
              },
              {
                number: "02",
                title: "Creative Development",
                description: "Our team then develops innovative concepts that align with your brand's voice while pushing creative boundaries to stand out."
              },
              {
                number: "03",
                title: "Execution & Refinement",
                description: "We meticulously craft and refine every element to create a cohesive and inspiring final product that exceeds expectations."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - CEO Only */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Our Leadership</h2>
            <p className="text-gray-600">
              Meet the visionary behind Carvestudio's creative direction.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-100 p-6 md:p-8 rounded-lg">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={ASSETS.ceoImage}
                  alt="Godsway Jerry Tamakloe - CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1">Godsway Jerry Tamakloe</h3>
                <p className="text-primary font-medium mb-4">Founder & Creative Manager</p>
                <p className="text-gray-700 mb-4">
                  The visionary behind Carve Studio, brings over 8 years of experience in transforming ideas into compelling visual narratives. With a keen eye for detail and a love for storytelling, Jerry leads the team in carving out unique brand identities.
                </p>
                <div className="flex justify-center md:justify-start space-x-3">
                  <a 
                    href="https://gh.linkedin.com/company/carvestudioo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-gray-300">
              These principles guide everything we do at Carvestudio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "African Excellence",
                description: "We celebrate and promote African creativity, talent, and perspectives in all our work."
              },
              {
                title: "Creative Innovation",
                description: "We constantly push boundaries and explore new approaches to visual storytelling."
              },
              {
                title: "Cultural Authenticity",
                description: "We maintain respect and authenticity when representing diverse cultural elements."
              },
              {
                title: "Transformative Impact",
                description: "We create work that changes perceptions and inspires positive action."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to collaborate?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create stunning visual experiences that celebrate African creativity and excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
