
import { motion } from 'framer-motion';
import { ServiceItem, services, getServiceIcon } from './serviceData';

const ServicesList = () => {
  return (
    <div className="space-y-24">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 ${service.textOnly ? '' : 'lg:grid-cols-2'} gap-12 items-center ${
        index % 2 !== 0 && !service.textOnly ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className={index % 2 !== 0 && !service.textOnly ? 'lg:order-2' : ''}>
        <div className="flex items-center mb-4">
          <div className="mr-4">{getServiceIcon(service.iconName)}</div>
          <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary mr-3 mt-1">✦</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {!service.textOnly && (
        <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 bg-primary p-2 rounded w-24 h-24 flex items-center justify-center rotate-3">
            <span className="text-4xl text-secondary font-bold">✦</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServicesList;
