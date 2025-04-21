import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Finder from './components/Finder';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <h1 className="logo">Pixel Craft Co.</h1>
            <button 
              className={`menu-btn ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Modern Web & App Development</h1>
            <p>Creating digital experiences that matter</p>
            <a href="#contact" className="btn">Get Started</a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with Finder */}
      <section className="projects" id="projects">
        <div className="container">
          <h2>Our Projects</h2>
          <Finder />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3>Web Development</h3>
              <p>Custom, responsive websites built with modern technologies</p>
            </motion.div>
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>App Development</h3>
              <p>Native iOS and Android applications</p>
            </motion.div>
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>UI/UX Design</h3>
              <p>User-centered design solutions</p>
            </motion.div>
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Technical Consulting</h3>
              <p>Expert guidance for your digital projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Work Together</h2>
          <div className="contact-info">
            <p className="phone-number">Call us: <a href="tel:6306753263">(630) 675-3263</a></p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default App; 