import React, { useState, useEffect, useRef } from 'react';
import { 
  FaTimes, 
  FaWhatsapp, 
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaChartLine, 
  FaHashtag, 
  FaChartPie, 
  FaMobileAlt, 
  FaSearchDollar, 
  FaBullhorn 
} from 'react-icons/fa';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const carouselRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: 'Marketing Digital',
      category: 'Estrategias Digitales',
      description: 'Soluciones integrales para potenciar tu presencia en línea y aumentar conversiones.',
      extendedDescription: 'Nuestro servicio de Marketing Digital está diseñado para impulsar tu negocio en el mundo digital. Desarrollamos estrategias personalizadas que se adaptan a tus objetivos específicos, utilizando las últimas tendencias y herramientas del mercado para maximizar tu retorno de inversión.',
      features: [
        'Estrategias personalizadas',
        'Campañas en redes sociales',
        'Email marketing',
        'Análisis de métricas',
        'SEO y posicionamiento',
        'Publicidad digital'
      ],
      icon: <FaChartLine />
    },
    {
      id: 2,
      title: 'Redes Sociales',
      category: 'Gestión de Comunidad',
      description: 'Gestionamos tus redes sociales para conectar con tu audiencia y fidelizar clientes.',
      extendedDescription: 'Creamos y gestionamos tu presencia en redes sociales con contenido de calidad que refleje la esencia de tu marca. Desarrollamos estrategias de contenido, programación de publicaciones y gestión de comunidad para aumentar tu alcance y engagement.',
      features: [
        'Gestión de redes sociales',
        'Creación de contenido',
        'Calendarización',
        'Análisis de rendimiento',
        'Respuesta a comentarios',
        'Estrategias de engagement'
      ],
      icon: <FaHashtag />
    },
    {
      id: 3,
      title: 'Análisis de Datos',
      category: 'Business Intelligence',
      description: 'Toma decisiones basadas en datos con nuestros análisis detallados y reportes personalizados.',
      extendedDescription: 'Transformamos datos en información valiosa para tu negocio. Nuestro servicio de análisis de datos te proporciona insights accionables que te permitirán tomar decisiones estratégicas informadas y medir el rendimiento de tus campañas.',
      features: [
        'Reportes personalizados',
        'Dashboards interactivos',
        'Análisis de audiencia',
        'Seguimiento de conversiones',
        'Recomendaciones estratégicas',
        'Métricas clave'
      ],
      icon: <FaChartPie />
    },
    {
      id: 4,
      title: 'Diseño Web',
      category: 'Desarrollo Web',
      description: 'Diseños web modernos, rápidos y optimizados para todos los dispositivos.',
      extendedDescription: 'Creamos sitios web que no solo lucen increíbles, sino que también funcionan a la perfección en todos los dispositivos. Nuestro enfoque en el diseño web incluye experiencia de usuario, rendimiento y optimización para motores de búsqueda.',
      features: [
        'Diseño responsive',
        'Optimización SEO',
        'Tiempos de carga rápidos',
        'Diseño UI/UX',
        'Integración con redes sociales',
        'Formularios de contacto'
      ],
      icon: <FaMobileAlt />
    },
    {
      id: 5,
      title: 'SEO',
      category: 'Posicionamiento Web',
      description: 'Mejora tu visibilidad en buscadores y atrae tráfico cualificado a tu sitio web.',
      extendedDescription: 'Nuestro servicio de SEO está diseñado para mejorar tu visibilidad en los motores de búsqueda y atraer tráfico cualificado a tu sitio web. Implementamos estrategias técnicas y de contenido para posicionarte en los primeros resultados de búsqueda.',
      features: [
        'Investigación de palabras clave',
        'Optimización on-page',
        'Link building',
        'Análisis de la competencia',
        'Informes de rendimiento',
        'Optimización móvil'
      ],
      icon: <FaSearchDollar />
    },
    {
      id: 6,
      title: 'Publicidad Digital',
      category: 'Campañas Pagas',
      description: 'Campañas publicitarias efectivas en Google Ads, Facebook, Instagram y más.',
      extendedDescription: 'Desarrollamos campañas publicitarias altamente efectivas en las principales plataformas digitales. Nuestro enfoque basado en datos asegura que cada peso invertido en publicidad genere el máximo retorno posible, llegando a tu audiencia ideal en el momento adecuado.',
      features: [
        'Campañas en Google Ads',
        'Publicidad en redes sociales',
        'Remarketing',
        'Segmentación avanzada',
        'Optimización de anuncios',
        'Análisis de ROI'
      ],
      icon: <FaBullhorn />
    }
  ];

  const openModal = (service, e) => {
    e.stopPropagation();
    setActiveService(service);
    setActiveCardId(service.id);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Trackear clics en WhatsApp
  const trackWhatsAppClick = (serviceTitle) => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'Contacto',
        'event_label': `WhatsApp - ${serviceTitle}`
      });
    }
  };

  // Navegación del carrusel
  const nextSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector('.service-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16; // Añade el gap
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector('.service-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16; // Añade el gap
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Manejo de eventos táctiles
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPos(e.touches ? e.touches[0].clientX : e.clientX);
    setCurrentScroll(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const walk = (x - startPos) * 2;
    carouselRef.current.scrollLeft = currentScroll - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Ajustar al centro de la tarjeta más cercana
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector('.service-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16; // Añade el gap
        const scrollPosition = container.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        container.scrollTo({
          left: newIndex * cardWidth,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      }
    }
  };

  // Actualizar indicadores
  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector('.service-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16; // Añade el gap
        const scrollPosition = container.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setCurrentIndex(newIndex);
      }
    }
  };

  // Agregar event listeners
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd);
      
      // Para soporte con mouse
      container.addEventListener('mousedown', handleTouchStart);
      container.addEventListener('mousemove', handleTouchMove);
      container.addEventListener('mouseup', handleTouchEnd);
      container.addEventListener('mouseleave', handleTouchEnd);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('mousedown', handleTouchStart);
        container.removeEventListener('mousemove', handleTouchMove);
        container.removeEventListener('mouseup', handleTouchEnd);
        container.removeEventListener('mouseleave', handleTouchEnd);
      };
    }
  }, [isDragging, startPos, currentScroll]);

  return (
    <section className="services-section" id="servicios">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones digitales para hacer crecer tu marca y aumentar tus resultados.
          </p>
        </div>

        <div 
          className={`services-grid ${isDragging ? 'dragging' : ''}`}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${activeCardId === service.id ? 'active' : ''}`}
              onClick={(e) => openModal(service, e)}
              aria-label={`Ver detalles de ${service.title}`}
            >
              <div className="service-card-content">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <button 
                  className="service-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service, e);
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow prev" 
          onClick={prevSlide} 
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        <button 
          className="carousel-arrow next" 
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {servicesData.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (carouselRef.current) {
                  const container = carouselRef.current;
                  const card = container.querySelector('.service-card');
                  if (card) {
                    const cardWidth = card.offsetWidth + 16; // Añade el gap
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              aria-label={`Ir al servicio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal de Servicio */}
      {isModalOpen && activeService && (
        <div 
          className="modal-overlay active" 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-category">{activeService.category}</span>
                <h2 id="modal-title" className="modal-title">{activeService.title}</h2>
              </div>
              
              <div className="modal-description">
                <p>{activeService.extendedDescription}</p>
              </div>
              
              <div className="modal-features">
                <h3>Lo que incluye:</h3>
                <ul>
                  {activeService.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck className="feature-icon" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-actions">
                <a
                  href="https://wa.me/+5493413138290"
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(activeService.title)}
                  aria-label={`Contactar por WhatsApp sobre ${activeService.title}`}
                >
                  <FaWhatsapp />
                  <span className="button-text">Chatear en WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;