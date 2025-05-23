
import { motion } from 'framer-motion';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const ProcessSection = () => {
  const processSteps: ProcessStep[] = [
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
  ];

  return (
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
          
          {processSteps.map((process, index) => (
            <ProcessStep key={index} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ process, index }: { process: ProcessStep; index: number }) => {
  return (
    <motion.div
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
  );
};

export default ProcessSection;
