import React, { useState } from 'react';

import Reloj from '../Reloj/index';
import './styles.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const sumarClick = () => {
    setCounter(counter + 1);
  };

  const restaClick = () => {
    setCounter(counter - 1);
  };

  const showClick = () => {
    setShow(!show);
  };

  //let counterValue = null;

  //esto lo reemplazamos en el codigo por los operadores terniarios
  //   if (show) {
  //     counterValue = <p>{counter}</p>;
  //   } else {
  //     counterValue = null;
  //   }

  return (
    <div className="text-center mt-4">
      <h1>Counter</h1>
      {/* {counterValue} */}
      {show ? <p>{counter}</p> : null}
      <button onClick={sumarClick} className="btn btn-primary">
        Add
      </button>
      <button onClick={showClick} className="btn btn-primary">
        Toggle Counter
      </button>
      <button onClick={restaClick} className="btn btn-primary">
        Rest
      </button>
    </div>
  );
}

export default function Component() {
  return (
    <div>
      <Reloj />
      <Counter />
    </div>
  );
}
