import React from 'react';
import style from "./Menu.module.css";

const Menu = () =>{

    return (
        <div className = {style.sidenav}>
            <ul>
                <div>The Bard</div>
                <li>Accueil</li>
                <li>Jeux</li>
                <li>Développeur</li>
                <li>Artiste</li>
                <li>Editeur</li>
                <li>Plateforme</li>
            </ul>
        </div>
      );

}

export default Menu;
