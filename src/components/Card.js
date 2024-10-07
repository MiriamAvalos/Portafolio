import React, { Component } from 'react';
import '../styles/card.css';
//import Img from '../images/logo.gif';
import Proyects from './Proyects';

class Card extends Component {

    render() {
        /*
              let array =  function technologiesArray() {
                    Proyects.data.map((item) => {
                      console.log()
                    })
                };
        */
        return (
            <div className="cointenerAllCards">
                {Proyects.data.map((item) =>
                    <div className="cointenerCard">
                        <img className="imgCard" src={item.img} alt={item.name} />
                        <div className="infoProyect">
                            <h3 className="proyectName"><strong>{item.name}</strong></h3>
                            <p className="descriptionProyect">{item.description}</p>
                            <div>
                                <h4 className="technilogies"><strong>Technologies</strong></h4>
                                {item.technologies.map((tags) =>
                                    <ul className="containerTagList">
                                        <li className="tagList">{tags}</li>
                                    </ul>
                                )}
                            </div>
                            <div className="cointenerButtonsCards">
                                <button className="buttonProyect"><a href={item.demo} target="_blank">Demo</a></button>
                                <button className="buttonProyect"><a href={item.github} target="_blank">GitHub</a></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Card;
