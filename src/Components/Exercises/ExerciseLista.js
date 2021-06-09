import { useState, useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';
import Cards from '../Cards/Cards';
import FatalError from '../Errors/500';

export default function ExerciseLista(props) {
  const [ejercicios, setEjercicios] = useState([]);

  const [loading, setLoading] = useState(true);

  let err = null;

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
        return <FatalError />;
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

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
