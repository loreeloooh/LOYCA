import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import '../styles/FeaturedProducts.css';

const marketingServices = [
  {
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar tu presencia en línea y atraer más clientes.',
    image: '/images/marketing1.jpg'
  },
  {
    title: 'Redes Sociales',
    description: 'Gestión profesional de tus redes sociales para conectar con tu audiencia.',
    image: '/images/marketing2.jpg'
  },
  {
    title: 'Publicidad Online',
    description: 'Campañas efectivas en Google Ads y redes sociales para maximizar tu ROI.',
    image: '/images/marketing3.jpg'
  }
];

const dataServices = [
  {
    title: 'Análisis de Datos',
    description: 'Extraemos insights valiosos de tus datos para tomar mejores decisiones de negocio.',
    image: '/images/data1.jpg'
  },
  {
    title: 'Reportes Personalizados',
    description: 'Informes detallados con métricas clave para monitorear el rendimiento de tu negocio.',
    image: '/images/data2.jpg'
  },
  {
    title: 'Dashboard en Tiempo Real',
    description: 'Visualización de datos en tiempo real para un seguimiento continuo de tus KPIs.',
    image: '/images/data3.jpg'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="marketing-container">
        <ServiceCarousel 
          title="Servicios de Marketing" 
          services={marketingServices} 
        />
      </div>        
      <div className="data-container">        
        <ServiceCarousel 
          title="Servicios de Análisis de Datos" 
          services={dataServices} 
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;