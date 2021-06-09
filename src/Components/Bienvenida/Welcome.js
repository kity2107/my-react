import React from 'react';
import './style.css';

const Welcome = ({ username }) => {
  return (
    <div className="container">
      <div className="Fitner-User-Info">
        <h1>Bienvenido: {username}!</h1>
        <p>Trabajemos para Mejorar!</p>
      </div>
    </div>
  );
};
export default Welcome;
