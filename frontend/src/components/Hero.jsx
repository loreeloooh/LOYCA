import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero marble-bg">
      <div className="container">
        <div className="hero-content">
          <h1>Loyca Marketing y data</h1>
          <p className="hero-subtitle">marketing digital basado en datos</p>
          <div className="hero-cta">
            <Link to="/coleccion" className="btn">Ver Colección</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;