import Cards from '../Cards';

export default function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map((exercise) => {
        return (
          <Cards
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
