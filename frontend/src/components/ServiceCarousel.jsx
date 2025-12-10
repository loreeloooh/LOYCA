// frontend/src/components/ServiceCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/ServiceCarousel.css';

const ServiceCarousel = ({ sections = [] }) => {
  // Si no hay secciones, no renderizar nada
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    className: 'service-sections-carousel'
  };

  return (
    <div className="service-carousel-container">
      <Slider {...settings}>
        {sections.map((section) => (
          <div key={section.id} className="service-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="service-carousel">
              {section.services && Array.isArray(section.services) && section.services.map((service) => (
                <div key={`${section.id}-${service.id}`} className="service-card">
                  <div className="service-image">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmZGY0Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+';
                      }}
                    />
                  </div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <a 
                      href={`https://wa.me/5491155555555?text=Hola, me interesa el servicio de ${encodeURIComponent(service.title)}`}
                      className="whatsapp-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> Contactar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;