import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';  // Importamos el componente
import FeaturedProducts from './components/FeaturedProducts';
import InstagramVideo from './components/InstagramVideo';
import Footer from './components/Footer';
import './styles/global.css';
import SocialLinks from './pages/SocialLinks';
import WhatsAppButton from './components/WhatsAppButton';
import PlansSection from './components/PlansSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <ServicesSection />  {/* Lo movemos aquí dentro */}
                    <FeaturedProducts />
                    <InstagramVideo />
                    <PlansSection />
                  </>
                } 
              />
              <Route path="/enlaces" element={<SocialLinks />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;