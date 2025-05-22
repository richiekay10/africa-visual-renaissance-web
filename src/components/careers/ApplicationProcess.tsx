
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApplicationProcess = () => {
  const applicationSteps = [
    'Browse Openings: Find the role that fits your skills.',
    'Prepare Your Documents: Resume + a short cover letter.',
    'Submit Online: Upload your application via our Careers Portal.',
    'Interview Stages: Initial Screening (Phone/Video), Skills Assessment (If applicable), Final Interview',
    'Offer & Onboarding: Welcome to Carve Studio!'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-6">How to Apply</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to start your journey with us? Follow these steps to join our team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {applicationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start mb-6"
            >
              <div className="bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg max-w-3xl mx-auto">
          <h3 className="heading-sm mb-4">Need help applying or have questions?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Reach out to us at <span className="font-semibold">careers@carvestudio.com</span>
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">
            <Mail className="mr-2" /> Contact Recruitment Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
