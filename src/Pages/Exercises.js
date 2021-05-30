import Footer from '../Components/Footer';
import Component from '../Components/EstadosuseState/index';
import Botones from '../Components/Botones';
import Welcome from '../Components/Bienvenida/Welcome';
import ExerciseList from '../Components/Exercises/ExerciseList';

function Exercises() {
  return (
    <div>
      <Welcome username="Cristian" />
      <ExerciseList />
      <Botones variant="contained" color="secondary" title="ok" />
      <Component />
      <Footer />
    </div>
  );
}

export default Exercises;
