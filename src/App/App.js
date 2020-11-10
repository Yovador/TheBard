import './App.css'
import Home from 'pages/Home';
import Game from 'pages/Game';
import Licence from 'pages/Licence';
import Dev from 'pages/Dev';
import Menu from 'components/Menu';
import Player from "components/Player/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>

        <Menu/>
        <Player/>

        <Switch>

          <Route path="/accueil">
            <Home/>
          </Route>

          <Route path="/jeux">
            <Game/>
          </Route>

          <Route path="/licence">
            <Licence/>
          </Route>

          <Route path="/dev">
            <Dev/>
          </Route>

        </Switch>
      </Router>

    </div>

  );
}

export default App
