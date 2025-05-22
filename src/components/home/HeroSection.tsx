
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };
  
  return (
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
  );
};

export default HeroSection;
