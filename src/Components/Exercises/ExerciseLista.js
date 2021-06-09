import { useState, useEffect } from 'react';
import Loading from '../../Components/Loading/Loading';
import Cards from '../Cards/Cards';
import FatalError from '../Errors/500';

function ExerciseLista(props) {
  const [ejercicios, setEjercicios] = useState([]);

  const [loading, setLoading] = useState(true);
  let merror = null;

  useEffect(() => {
    try {
      fetch('http://localhost:8000/api/exercises')
        .then((response) => {
          return response.json();
        })
        .then((dat) => {
          setEjercicios(dat);

          setLoading(false);
          // console.log('paso a ser falso');
        });
    } catch (e) {
      merror = e;
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (merror != null) {
    return <FatalError />;
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
export default ExerciseLista;
