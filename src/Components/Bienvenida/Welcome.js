import React from 'react';

function Welcome(props) {
  const { username } = props;
  return (
    <div className="container">
      <div className="Fitner-User-Info">
        <h1>Bienvenido: {username}!</h1>
        <p>Trabajemos para Mejorar!</p>
      </div>
    </div>
  );
}
export default Welcome;
