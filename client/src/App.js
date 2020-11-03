import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from='/' to='create' exact />
          <Route path='/create' component={CreatePokemon} exact />
          <Route path='/View' component={ViewPokemon} exact />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
