
import { motion } from 'framer-motion';

const ServicesIntro = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="heading-lg mb-6">Our Creative Services at Carvestudio</h2>
      <p className="text-gray-700 text-lg">
        We offer a wide range of tailored creative services that bring your brand to life — whether you're a startup, a growing business, or an established enterprise. At Carvestudio, every service is delivered with a creative edge and strategic intent.
      </p>
    </motion.div>
  );
};

export default ServicesIntro;
