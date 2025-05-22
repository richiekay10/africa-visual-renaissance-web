
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-20 bg-primary text-secondary">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-6">Ready to bring your vision to life?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's collaborate to create something remarkable that celebrates the African spirit and pushes creative boundaries.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-secondary hover:bg-black text-white px-8 py-4 rounded font-medium transition-colors"
        >
          Contact Us Today <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;
