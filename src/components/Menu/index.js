import React from 'react';
import style from "./Menu.module.css";
import MenuButton from "./MenuButton/MenuButton";


const Menu = () =>{

    return (
        <div className = {style.sidenav}>
            <ul>
                <div>The Bard</div>
                <li><MenuButton viewId = 'accueil'> Accueil </MenuButton></li>
                <li><MenuButton viewId = 'jeux'> Jeux </MenuButton></li>
                <li><MenuButton viewId = 'licences'> Licences </MenuButton></li>
                <li><MenuButton viewId = 'developpeur'> Développeur </MenuButton></li>
                <li><MenuButton viewId = 'editeur'> Editeur </MenuButton></li>
                <li><MenuButton viewId = 'plateforme'> Plateforme </MenuButton></li>
            </ul>
        </div>
      );
}

export default Menu;
