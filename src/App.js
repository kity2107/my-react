import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Exercises from './Pages/Exercises';
import ExercisesNew from './Pages/ExercisesNew';
import NotFound from './Pages/NotFound';
import Calc from './Pages/Calc';
import Clase from './Pages/Clase';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/exercises/new" component={ExercisesNew} />
        <Route exact path="/calc" component={Calc} />
        <Route exact path="/clase" component={Clase} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
