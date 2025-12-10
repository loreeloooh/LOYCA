import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/SocialLinks.css';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: 'Instagram',
      url: 'https://instagram.com/tu_usuario',
      icon: <FaInstagram className="social-icon" />,
      color: '#E1306C'
    },
    {
      id: 2,
      name: 'Facebook',
      url: 'https://facebook.com/tu_pagina',
      icon: <FaFacebook className="social-icon" />,
      color: '#4267B2'
    },
    {
      id: 3,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/tu_empresa',
      icon: <FaLinkedin className="social-icon" />,
      color: '#0077B5'
    },
    {
      id: 4,
      name: 'WhatsApp',
      url: 'https://wa.me/tunumero',
      icon: <FaWhatsapp className="social-icon" />,
      color: '#25D366'
    }
  ];

  return (
    <div className="social-links-container">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <h1>Loyca</h1>
        <p>Conecta con nosotros</p>
      </div>
      
      <div className="links-container">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="social-link"
            style={{ '--bg-color': link.color }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-content">
              {link.icon}
              <span>{link.name}</span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="home-link">
        <Link to="/">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;