import React, { Component } from 'react';
import Menu from '../components/Menu';
import '../styles/about.css';
import miri from '../images/PerfilMiriam.jpg';
import arrow from '../images/right-arrow.png';
import { Link } from 'react-router-dom';

class About extends Component {
  componentDidMount() {
    // Inicializa AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, // Duración de la animación
        once: true, // Si deseas que la animación ocurra solo una vez
      });
    }
  }

  render() {
    return (
      <div className="cointenerAbout">
        <Menu />
        <div className="cointenerTextAbout">
          <img src={miri} alt="" className="photoMiri" data-aos="fade-up" /> 
          <p className="titleAbout" data-aos="fade-right">Hola, </p>
          <p className="titleAbout" data-aos="fade-right">Mi nombre es <span className="spanContact">Miriam Avalos</span></p>
          <p className="titleAbout" data-aos="fade-left">Soy Desarrolladora Web. </p>
          
          <br/>

          <div className="cointenerButtonsAbout">
            <Link to="/contact">
              <button className="buttonAboutContact" data-aos="zoom-in">Contact me  <img src={arrow} alt="" className="photoarrow" data-aos="fade-up" /> </button> {/* Añade data-aos aquí */}
            </Link>
            <Link to="/works">
              <button className="buttonAboutContact" data-aos="zoom-in">See my works</button> {/* Añade data-aos aquí */}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
