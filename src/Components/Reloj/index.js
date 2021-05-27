import React, { useState, useEffect } from 'react';

import './gifReloj.css';
import GifReloj from './GifReloj';

export default function Reloj() {
  const [hora, setHora] = useState();

  useEffect(() => {
    setTimeout(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
  }, [hora]);

  return (
    <div className="cargar">
      <div className="reloj">
        <h2>Hora:{hora}</h2>
      </div>
      <GifReloj />
    </div>
  );
}
