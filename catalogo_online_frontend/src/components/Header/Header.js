import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <div className="top-bar">
        <span className="location"><i className="fas fa-map-marker-alt"></i> Barbosa-SP</span>
        <span className="contact"><i className="fas fa-envelope"></i> catalagobsa@gmail.com</span>
        <span className="social-icons">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        </span>
      </div>
      <header className="header">
        <div className="logo">CATÁLOGO <span style={{ color: 'orange' }}>ONLINE</span></div>
        <nav className="navbar">
          <a href="#">Página Inicial</a>
          <a href="#">Quem Somos</a>
          <a href="#">Fale Conosco</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
