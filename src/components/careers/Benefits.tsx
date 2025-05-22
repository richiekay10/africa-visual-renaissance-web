
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    { title: 'Competitive Compensation', description: 'Fair, market-aligned salaries based on skill and impact.' },
    { title: 'Health & Wellness', description: 'Access to wellness initiatives to promote work-life balance.' },
    { title: 'Growth Opportunities', description: 'Trainings, workshops, and mentorship to fuel your development.' },
    { title: 'Inclusive Culture', description: "Diversity is more than a value—it's how we thrive." },
    { title: 'Flexible Work', description: 'Options for hybrid schedules and remote work when possible.' },
    { title: 'Team Bonding', description: 'Regular creative hangouts, team lunches, and retreats.' },
    { title: 'Inspiring Workspace', description: 'Modern tools, beautiful workspaces, and a positive atmosphere.' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-6">Employee Benefits</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Working at Carve Studio comes with perks designed to enhance your well-being, career growth, and overall experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
