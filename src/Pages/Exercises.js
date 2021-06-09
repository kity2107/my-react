import Footer from '../Components/Footer';
import Component from '../Components/EstadosuseState/index';
import Botones from '../Components/Botones';
import Welcome from '../Components/Bienvenida/Welcome';
import ExerciseLista from '../Components/Exercises/ExerciseLista';

const Exercises = ({ data }) => {
  return (
    <div>
      <Welcome username="Cristian" />
      <ExerciseLista exercises={data} />
      <Botones variant="contained" color="secondary" title="+" />
      {/* <Component />
      <Footer /> */}
    </div>
  );
};

export default Exercises;
