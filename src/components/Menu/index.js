import React from 'react';
import style from "./Menu.module.css";

const Menu = () =>{

    return (
        <div className = {style.sidenav}>
            
                <div>
                    <a href="">The bard</a>
                </div>
                <div>
                    <div>
                        <a href="">Accueil</a>
                    </div>
                    <a href="">Jeux</a>
                    <a href="">Développeur</a>
                    <a href="">Artiste</a>
                    <a href="">Editeur</a>
                    <a href="">Plateforme</a>
                </div>
            
        </div>
      );

}

export default Menu;
