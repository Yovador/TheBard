import './App.css'
import Home from 'pages/Home/Home';
import Game from 'pages/Game/Game';
import Licence from 'pages/Licence/License';
import Editeur from 'pages/Editeur/Editeur';
import Plateforme from 'pages/Plateforme/Plateforme';
import Dev from 'pages/Dev/Dev';
import Menu from 'components/Menu/Menu';
import Player from "components/Player/Player";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Artiste from 'pages/Artiste/Artiste';



function App() {
  return (
    <div>
      <Router>

        <Menu/>
        <Player/>

        <Switch>

          <Route path="/jeux">
            <Game/>
          </Route>

          <Route path="/licence">
            <Licence/>
          </Route>

          <Route path="/dev">
            <Dev/>
          </Route>

          <Route path="/editeur">
            <Editeur/>
          </Route>

          <Route path="/plateforme">
            <Plateforme/>
          </Route>

          <Route path="/artiste">
            <Artiste/>
          </Route>

          <Route path="">
            <Home/>
          </Route>

        </Switch>
      </Router>

    </div>

  );
}

export default App
