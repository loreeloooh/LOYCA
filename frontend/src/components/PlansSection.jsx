import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/PlansSection.css';

const PlansSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '20px',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          arrows: true,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '10px',
          dots: true,
          arrows: true
        }
      }
    ]
  };

  const plans = [
    {
      id: 1,
      title: 'PLAN INICIAL',
      price: '',
      features: [
        '1 publicación por día',
        'Diseño de 2 historias destacadas',
        '2 publicaciones fijas',
        'Diseño de perfil',
        '1 mes de gestión',
        '1 asesoría de 30 min',
        'Estrategia de crecimiento'
      ]
    },
    {
      id: 2,
      title: 'PLAN INTERMEDIO',
      price: '',
      features: [
        '2 publicaciones por semana',
        'Diseño de 3 historias destacadas',
        '3 publicaciones fijas',
        'Diseño de perfil',
        '1 mes de gestión',
        '1 asesoría de 45 min',
        'Estrategia de crecimiento personalizada'
      ]
    },
    {
      id: 3,
      title: 'PLAN AVANZADO',
      price: '',
      features: [
        '3 publicaciones por semana',
        'Diseño de 4 historias destacadas',
        '4 publicaciones fijas',
        'Diseño de perfil profesional',
        '1 mes de gestión',
        '1 asesoría de 1 hora',
        'Estrategia de crecimiento personalizada'
      ]
    },
    {
      id: 4,
      title: 'PLAN PREMIUM',
      price: '',
      features: [
        'Publicaciones diarias',
        'Diseño de 5 historias destacadas',
        '5 publicaciones fijas',
        'Diseño de perfil profesional',
        '1 mes de gestión',
        '2 asesorías de 1 hora',
        'Estrategia de crecimiento personalizada'
      ]
    }
  ];

  return (
    <section className="plans-section">
      <h2>Nuestros Planes</h2>
      <div className="plans-container">
        <Slider {...settings}>
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card-wrapper">
              <div className="plan-card">
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="contact-button">Contratar</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PlansSection;