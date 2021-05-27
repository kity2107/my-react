import Footer from './Components/Footer/';
import Cards from './Components/Cards/';
import Component from './Components/EstadosuseState/index';
import exerciseImg from './images/exercise.png';

function App() {
  return (
    <div>
      <Component />
      <Cards
        title="Technique Guides"
        description="Learn amazing street workout and calisthenics"
        img={exerciseImg}
        leftColor="#a74cf2"
        rightColor="#617bfb"
      />
      <Footer />
    </div>
  );
}

export default App;
