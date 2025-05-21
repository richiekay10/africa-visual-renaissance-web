
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Client Testimonials - Carvestudio';
  }, []);

  const testimonials = [
    {
      quote: "CarveStudio brought our brand to life with a stunning logo and comprehensive branding package. Their creativity and attention to detail surpassed our expectations.",
      author: "Akosua Mensah",
      position: "CEO, GoldLink Technologies",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      service: "Brand Identity"
    },
    {
      quote: "The web design expertise and dedication to quality set them apart. Our site is now faster, cleaner, and much more user-friendly.",
      author: "Kofi Asante",
      position: "Marketing Manager, Jumia Ghana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      service: "Web Design"
    },
    {
      quote: "CarveStudio's graphic design team created visually appealing marketing materials that truly captured the essence of our brand. Their designs elevated our entire image.",
      author: "Esi Dapaah",
      position: "Founder, Sweet Earth Bakery",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      service: "Graphic Design"
    },
    {
      quote: "Working with CarveStudio on UX/UI design was a game-changer. Our digital platforms now offer seamless and engaging experiences, thanks to their innovative designs.",
      author: "Yaw Boakye",
      position: "HR Director, SoftEdge Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      service: "UX/UI Design"
    },
    {
      quote: "CarveStudio's social media management services have significantly increased our engagement. Their strategic approach and creative content resonate deeply with our audience.",
      author: "Nana Ama Serwaa",
      position: "Social Media Manager, FitLife Ghana",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      service: "Social Media"
    },
    {
      quote: "The SEO services provided by CarveStudio boosted our online visibility, resulting in a noticeable increase in organic traffic. Their digital marketing expertise is commendable.",
      author: "Kwame Opoku",
      position: "CFO, EcoGreen Ghana",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      service: "SEO Services"
    },
    {
      quote: "CarveStudio's event branding services added a professional touch to our forum. Their designs for logos, collateral, and signage enhanced the overall attendee experience.",
      author: "Abena Nyarko",
      position: "Event Coordinator, Accra Business Forum",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80",
      service: "Event Branding"
    },
    {
      quote: "CarveStudio's motion graphics brought our brand to life in the digital space. Their animated designs added a dynamic and modern flair to our campaigns.",
      author: "Kojo Boadi",
      position: "Creative Director, AfroMode Apparel",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      service: "Motion Graphics"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-gray-200 text-lg">
              Hear what our clients say about their experience working with Carvestudio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover aspect-square"
                  />
                  <div className="absolute top-0 left-0 bg-primary px-3 py-1 text-sm font-medium text-secondary">
                    {testimonial.service}
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl text-primary mb-4">❝</div>
                    <p className="italic text-gray-700 mb-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to work with us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us help bring your vision to life with our creative expertise.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
