import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Portfolio - Carvestudio';
  }, []);
  
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: "Adinkra Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1512237798647-84b57b22b517?auto=format&fit=crop&q=80",
      description: "Modern brand identity inspired by traditional Adinkra symbols."
    },
    {
      id: 2,
      title: "Savannah E-Commerce Platform",
      category: "digital",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      description: "User interface design for an African fashion e-commerce platform."
    },
    {
      id: 3,
      title: "Heritage Photography Series",
      category: "photography",
      image: "https://images.unsplash.com/photo-1580974582391-a6649c82a85f?auto=format&fit=crop&q=80",
      description: "Photographic exploration of cultural traditions across West Africa."
    },
    {
      id: 4,
      title: "Umoja Festival Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
      description: "Comprehensive marketing campaign for a pan-African cultural festival."
    },
    {
      id: 5,
      title: "Akwaaba Hospitality Rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80",
      description: "Complete rebranding for a luxury hospitality chain."
    },
    {
      id: 6,
      title: "Tech Innovation Hub Website",
      category: "digital",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?auto=format&fit=crop&q=80",
      description: "Website design and development for a tech innovation hub in Accra."
    },
    {
      id: 7,
      title: "Diaspora Stories",
      category: "photography",
      image: "https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?auto=format&fit=crop&q=80",
      description: "Portrait series documenting African diaspora success stories."
    },
    {
      id: 8,
      title: "Organic Wellness Packaging",
      category: "branding",
      image: "https://images.unsplash.com/photo-1616502587717-46ccb1b8b688?auto=format&fit=crop&q=80",
      description: "Product packaging design for an African organic wellness brand."
    },
    {
      id: 9,
      title: "Mobile Banking App",
      category: "digital",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      description: "UI/UX design for a mobile banking application focused on accessibility."
    },
    {
      id: 10,
      title: "Sustainable Fashion Lookbook",
      category: "photography",
      image: "https://images.unsplash.com/photo-1580974582391-a6649c82a85f?auto=format&fit=crop&q=80",
      description: "Photography and layout design for an eco-friendly fashion brand."
    }
  ];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80')] bg-cover bg-center h-full w-full"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-gray-200 text-lg">
              Explore our creative work showcasing African excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Filter Controls */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {['all', 'branding', 'digital', 'photography', 'marketing'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    filter === category 
                      ? 'bg-primary text-secondary' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="uppercase text-xs font-bold text-primary mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-500">No projects found in this category.</h3>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 text-primary hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Client Testimonials</h2>
            <p className="text-gray-600">
              See what our clients have to say about working with Carvestudio.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CarveStudio brought our brand to life with a stunning logo and comprehensive branding package. Their creativity and attention to detail surpassed our expectations.",
                author: "Akosua Mensah",
                position: "CEO, GoldLink Technologies"
              },
              {
                quote: "The web design expertise and dedication to quality set them apart. Our site is now faster, cleaner, and much more user-friendly.",
                author: "Kofi Asante",
                position: "Marketing Manager, Jumia Ghana"
              },
              {
                quote: "CarveStudio's graphic design team created visually appealing marketing materials that truly captured the essence of our brand. Their designs elevated our entire image.",
                author: "Esi Dapaah",
                position: "Founder, Sweet Earth Bakery"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-4xl text-primary mb-4">❝</div>
                <p className="italic text-gray-700 mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
