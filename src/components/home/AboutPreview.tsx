
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
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
  );
};

export default AboutPreview;
