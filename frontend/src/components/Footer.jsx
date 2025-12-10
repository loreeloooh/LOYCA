import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Loyca</h3>
            <p>marketing digital.</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/coleccion">Colección</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: hola@loyca.com</p>
            <p>Tel: +52 55 1234 5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Loyca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;