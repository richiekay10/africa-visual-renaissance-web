
import { motion } from 'framer-motion';

const CultureValues = () => {
  const values = [
    { title: 'Creativity', description: 'We champion original ideas and out-of-the-box thinking.' },
    { title: 'Collaboration', description: "We build together—everyone's input matters." },
    { title: 'Quality', description: 'Excellence is our standard in every task.' },
    { title: 'Integrity', description: 'We operate with honesty, trust, and transparency.' },
    { title: 'Continuous Learning', description: 'We evolve with the industry and invest in learning.' },
    { title: 'Inclusivity', description: 'Every voice is heard. Every person is valued.' },
    { title: 'Client-Centricity', description: "Our clients' goals shape our direction." }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-6 text-primary">Our Culture & Values</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Carve Studio, our strength lies in our people and the values we live by.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-3 text-primary">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureValues;
