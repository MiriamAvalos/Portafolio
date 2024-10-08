import React, { Component } from 'react';
import Menu from '../components/Menu';
import '../styles/about.css';
import miri from '../images/PerfilMiriam.png';
import arrow from '../images/right-arrow.png';
import { Link } from 'react-router-dom';

class About extends Component {
  componentDidMount() {
    // Inicializa AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }

  render() {
    return (
      <div className='cointenerAbout'>
        <Menu />
        <div className='cointenerTextAbout'>
          <img src={miri} alt='' className='photoMiri' data-aos='fade-up' />
          <p className='titleAbout' data-aos='fade-right'>
            Hello,{' '}
          </p>
          <p className='titleAbout' data-aos='fade-right'>
            My name is <span className='spanContact'>Miriam Avalos.</span>
          </p>
          <p className='titleAbout' data-aos='fade-left'>
            I am a Web Developer.{' '}
          </p>

          <br />

          <div className='cointenerButtonsAbout'>
            <Link to='/contact'>
              <button className='buttonAboutContact text' data-aos='zoom-in'>
                Contact me
                <img
                  src={arrow}
                  alt=''
                  className='photoarrow'
                  data-aos='fade-up'
                />{' '}
              </button>
            </Link>
            <Link to='/works'>
              <button className='buttonAboutContact' data-aos='zoom-in'>
                See my works
                <img
                  src={arrow}
                  alt=''
                  className='photoarrow'
                  data-aos='fade-up'
                />{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
