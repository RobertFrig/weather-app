import React, { Component } from 'react';
import './Card.css';
import sunSrc from '../../assets/sun.png'

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img alt="" src={sunSrc} />
        <p>Text going here</p>
      </div>
    );
  }
}

export default Card;