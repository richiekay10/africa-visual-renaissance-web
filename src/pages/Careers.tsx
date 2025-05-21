import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, BookOpen, Heart, Clock, Coffee, Mail, Smartphone, Gamepad } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers - Carvestudio';
  }, []);

  const jobCategories = [
    { title: 'Branding & Identity', icon: Briefcase },
    { title: 'UI/UX Design', icon: Users },
    { title: 'Web Development', icon: BookOpen },
    { title: 'Digital Marketing', icon: Award },
    { title: 'Project Management', icon: Clock },
    { title: 'Content Creation', icon: Coffee },
    { title: 'Mobile App Development', icon: Smartphone },
    { title: 'Game Development', icon: Gamepad }
  ];

  const benefits = [
    { title: 'Competitive Compensation', description: 'Fair, market-aligned salaries based on skill and impact.' },
    { title: 'Health & Wellness', description: 'Access to wellness initiatives to promote work-life balance.' },
    { title: 'Growth Opportunities', description: 'Trainings, workshops, and mentorship to fuel your development.' },
    { title: 'Inclusive Culture', description: 'Diversity is more than a value—it\'s how we thrive.' },
    { title: 'Flexible Work', description: 'Options for hybrid schedules and remote work when possible.' },
    { title: 'Team Bonding', description: 'Regular creative hangouts, team lunches, and retreats.' },
    { title: 'Inspiring Workspace', description: 'Modern tools, beautiful workspaces, and a positive atmosphere.' }
  ];

  const values = [
    { title: 'Creativity', description: 'We champion original ideas and out-of-the-box thinking.' },
    { title: 'Collaboration', description: 'We build together—everyone\'s input matters.' },
    { title: 'Quality', description: 'Excellence is our standard in every task.' },
    { title: 'Integrity', description: 'We operate with honesty, trust, and transparency.' },
    { title: 'Continuous Learning', description: 'We evolve with the industry and invest in learning.' },
    { title: 'Inclusivity', description: 'Every voice is heard. Every person is valued.' },
    { title: 'Client-Centricity', description: 'Our clients\' goals shape our direction.' }
  ];

  const applicationSteps = [
    'Browse Openings: Find the role that fits your skills.',
    'Prepare Your Documents: Resume + a short cover letter.',
    'Submit Online: Upload your application via our Careers Portal.',
    'Interview Stages: Initial Screening (Phone/Video), Skills Assessment (If applicable), Final Interview',
    'Offer & Onboarding: Welcome to Carve Studio!'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Careers at Carve Studio</h1>
            <p className="text-gray-200 text-lg">
              Join our team of creative professionals and help bring ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-6">Job Openings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Are you passionate about creativity and innovation? Join the Carve Studio team and be part of a vibrant, collaborative environment where ideas come to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <category.icon className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">
              Explore Current Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Culture & Values Section */}
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

      {/* Application Process Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-black">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Join Our Creative Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team that values creativity, innovation, and growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
