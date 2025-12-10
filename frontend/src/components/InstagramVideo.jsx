import React, { useEffect, useState } from 'react';
import '../styles/InstagramVideo.css';

const InstagramVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    
    script.onload = () => {
      if (window.instgrm) {
        // Forzar la recarga del script
        setTimeout(() => {
          window.instgrm.Embeds.process();
          setIsLoading(false);
        }, 1000);
      } else {
        setError('No se pudo cargar el reproductor de Instagram');
        setIsLoading(false);
      }
    };

    script.onerror = () => {
      setError('Error al cargar el reproductor de video');
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Usar un post público de Instagram que sabemos que funciona
  const instagramUrl = "https://www.instagram.com/p/DN0Z-ecYovK/"; // Reemplaza con un enlace válido

  return (
    <section className="instagram-video-section">
      <h2>Últimos Videos</h2>
      <div className="instagram-embed-wrapper">
        {error ? (
          <div className="error-message">
            <p>No se pudo cargar el video. Por favor, inténtalo de nuevo más tarde.</p>
            <a 
              href="https://www.instagram.com/explore/tags/instagram/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              Ver en Instagram
            </a>
          </div>
        ) : (
          <div className="instagram-embed-container">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink={instagramUrl}
              data-instgrm-version="14"
              data-instgrm-captioned={false}
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                Ver en Instagram
              </a>
            </blockquote>
            {isLoading && <div className="loading-spinner">Cargando video...</div>}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramVideo;