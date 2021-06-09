import { useState, useEffect } from 'react';

import Cards from '../Cards/Cards';

function ExerciseLista(props) {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/exercises')
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        setEjercicios(dat);
        //console.log(dat);
      });
  }, []);

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
