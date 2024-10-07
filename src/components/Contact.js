import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="cointenerContact">
        <Menu />
        <div className="cointenerInfo">
        <p className="titleContact">Hey! here you can contact me</p>
        <p className="email">hello@paulinamontoya.com</p>
        <div className="cointenerButtonsContact">
          <button className="buttonContact"><a href="https://www.linkedin.com/in/paulinamontoya/" target="_blank"><i className="fab fa-linkedin-in fa-2x"></i></a></button>
          <button className="buttonContact"><a href="https://github.com/PaulinaMontoya" target="_blank"><i class="fab fa-github fa-2x"></i></a></button>
          <button className="buttonContact"><a href="mailto:hello@paulinamontoya.com"><i class="fas fa-envelope fa-2x"></i></a></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

