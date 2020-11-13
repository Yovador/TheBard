import './App.css'
import Home from 'pages/Home/Home';
import Game from 'pages/Game/Game';
import Persona3 from 'pages/Game/SpecificGames/Persona3/Persona3';
import Persona4 from 'pages/Game/SpecificGames/Persona4/Persona4';
import Persona5 from 'pages/Game/SpecificGames/Persona5/Persona5';
import Persona from 'pages/Licence/SpecificLicences/Persona/Persona';

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
          <Route path="/jeux">
            <Global>
                <Game/>
            </Global>
          </Route>

          <Route path="/licence">
            <Global>
              <Licence/>
            </Global>
          </Route>

          <Route path="/dev">
            <Global>
              <Dev/>
            </Global>
          </Route>

          <Route path="/editeur">
            <Global>
              <Editeur/>
            </Global>
          </Route>

          <Route path="/plateforme">
            <Global>
              <Plateforme/>
            </Global>
          </Route>

          <Route path="/artiste">
            <Global>
              <Artiste/>
            </Global>
          </Route>


          <Route path="/persona3">
            <Global>
              <Persona3/>
            </Global>
          </Route>

          <Route path="/persona4">
            <Global>
              <Persona4/>
            </Global>
          </Route>

          <Route path="/persona5">
            <Global>
              <Persona5/>
            </Global>
          </Route>

          <Route path="/persona">
            <Global>
              <Persona/>
            </Global>
          </Route>

          <Route path="">
            <Global>
              <Home/>
            </Global>
          
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App
