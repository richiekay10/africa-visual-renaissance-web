
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
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
  );
};

export default ServicesPreview;
