
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
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
  );
};

export default ServicesHero;
