import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/main.css';

class Main extends Component {
  
  render() {
    return (
      <div className="cointenerMain">
        <Menu />
        <p className="titleMain">This is gonna be the <span className="spanContact">home</span> page</p>
      </div>
    );
  }
}

export default Main;

