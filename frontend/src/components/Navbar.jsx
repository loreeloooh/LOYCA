// Código del Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => isMobile && setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Loyca
        </Link>

        <button 
          className={`hamburger-button ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu} className="nav-link">Inicio</Link>
          <Link to="/coleccion" onClick={closeMenu} className="nav-link">Colección</Link>
          <Link to="/enlaces" onClick={closeMenu} className="nav-link">Conéctate</Link>
          
          {isAuthenticated ? (
            <div className="user-section">
              <span className="welcome-text">Hola, {user?.username}</span>
              <button 
                onClick={() => { 
                  logout(); 
                  closeMenu(); 
                }} 
                className="btn"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={closeMenu} className="btn">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;