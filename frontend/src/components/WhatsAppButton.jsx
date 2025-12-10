import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '549'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría más información sobre sus servicios.';
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;