import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Cards from './Cards';
//import FatalError from '../Errors/500';

export default function ExerciseLista(props) {
  const [ejercicios, setEjercicios] = useState([]);

  const [loading, setLoading] = useState(true);
  // const [base, setBase] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/exercises')
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        setEjercicios(dat);

        setLoading(false);
        // console.log('paso a ser falso');
      })
      .catch((error) => {
        console.log('el error es: ' + error);
        // setBase(false);
        // control();
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  // function control() {
  //   if (base) {
  //     console.log(base);
  //     return <FatalError />;
  //   } else {
  //     console.log('Conexion exitosa');
  //   }
  // }

  return (
    <div>
      {ejercicios.map((exercise) => {
        return (
          <Cards
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
          />
        );
      })}
    </div>
  );
}
