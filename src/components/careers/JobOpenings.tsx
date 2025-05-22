
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, BookOpen, Clock, Coffee, Smartphone, Gamepad } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const JobOpenings = () => {
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
  );
};

export default JobOpenings;
