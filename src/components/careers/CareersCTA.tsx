
import { Link } from 'react-router-dom';

const CareersCTA = () => {
  return (
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
  );
};

export default CareersCTA;
