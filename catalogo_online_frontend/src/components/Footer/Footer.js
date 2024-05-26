import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>CATÁLOGO LOCAL</h2>
          <p>
          Somos o seu guia para explorar os comércios e serviços de Barbosa-SP. Nosso objetivo é conectar você aos negócios locais que fazem a diferença na nossa comunidade.
          </p>
        </div>
        <div className="footer-section">
          <h2>FALE CONOSCO</h2>
          <p>
            Barbosa - SP<br />
            +55 16 98185-8880<br />
            catalagobsa@gmail.com
          </p>
        </div>
        <div className="footer-section">
          <h2>ATENDIMENTO</h2>
          <p>
            Segunda A Sexta<br />
            09:00h - 17:30h<br />
            Sábado E Domingo<br />
            Fechado
          </p>
        </div>
        <div className="footer-section">
          <h2>REDES SOCIAIS</h2>
          <p>Siga-nos nas redes sociais.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
