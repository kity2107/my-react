import Footer from './Components/Footer/';
import Cards from './Components/Cards/index';
import Component from './Components/EstadosuseState/index';
import Botones from './Components/Botones';

function App() {
  return (
    <div>
      <Component />
      <Cards />
      <Botones variant="contained" color="secondary" title="ok" />
      <Footer />
    </div>
  );
}

export default App;
