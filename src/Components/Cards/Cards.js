import React from 'react';
import circlesImg from '../../images/circles.png';
import './style.css';
import emptyImg from '../../images/empty.png';

const Cards = ({ title, description, img, leftColor, rightColor }) => (
  <div
    className="card mx-auto Fitness-Card"
    style={{
      backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${
        leftColor || '#56CCF2'
      }  , ${rightColor || '#2F80ED'}) `,
    }}
  >
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={img || emptyImg} className="float-right" alt="exercise" />
        </div>
        <div className="col-6 Fitness-Card-Info">
          <h1>{title || 'El título'}</h1>
          <p>{description || 'Descripcion:'}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
