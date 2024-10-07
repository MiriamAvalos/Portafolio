import React, { Component } from 'react';
import Menu from '../components/Menu';
import Card from '../components/Card';
import '../styles/works.css';


class Works extends Component {
  render() {
    return (
      <div className="cointenerWorks">
        <Menu />
        <div className="cointenerCardsProyects">
        <p className="titleWorks">Take a look of my<span className="spanContact"> Works</span></p>
        <Card />
        </div>
      </div>
    );
  }
}

export default Works;

