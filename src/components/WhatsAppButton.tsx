
import { Whatsapp } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+233202115651';
  const message = 'Hello Carvestudio, I would like to inquire about your services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="Chat on WhatsApp"
    >
      <Whatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
