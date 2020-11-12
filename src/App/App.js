import './App.css'
import Home from 'pages/Home/Home';
import Game from 'pages/Game/Game';
import Persona3 from 'pages/Game/SpecificGames/Persona3/Persona3';
import Persona4 from 'pages/Game/SpecificGames/Persona4/Persona4';
import Persona5 from 'pages/Game/SpecificGames/Persona5/Persona5';

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
import Global from 'components/Global/Global';



function App() {
  return (
    <div>
      <Router>

        <Menu/>
        <Player/>

        <Switch>
          <Global>

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


          <Route path="/persona3">
            <Persona3/>
          </Route>

          <Route path="/persona4">
            <Persona4/>
          </Route>

          <Route path="/persona5">
            <Persona5/>
          </Route>

          <Route path="">
            <Home/>
          </Route>

          </Global>
        </Switch>
      </Router>

    </div>

  );
}

export default App
