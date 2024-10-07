import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/menu.css';


class Menu extends Component {

  styleMobile = {
    height: '250px'
  }

  constructor(props) {
    super(props);
    this.state = {
      openMenuMobile: false
    };
  }

  render() {
    return (
      <div className="cointenerMenu" style={(this.state.openMenuMobile) ? this.styleMobile : {}}>

        <div className="containerLogoBurger">
          <Link to="/about">
            <img src={logo} alt="paulinamontoya.com" className="logoMenu" ></img>
          </Link>
          <div className="iconBurger">
            <i class="fas fa-bars fa-2x" onClick={() => {
              this.setState({ openMenuMobile: !this.state.openMenuMobile })
            }} ></i>
          </div>
        </div>

        <div className="cointenerButtons">
          <Link to="/about">
            <p className="buttonMenu">About me</p>
          </Link>
          <Link to="/works">
            <p className="buttonMenu">Works</p>
          </Link>
          <Link to="/contact">
            <p className="buttonMenu">Contact me</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;