import React from 'react';
import style from "./Menu.module.css";
import MenuButton from "./MenuButton/MenuButton";

const Menu = () =>{

    return (
        <div className = {style.sidenav}>

            <div className = {style.logo}>The Bard</div>
            <div><MenuButton viewId = 'accueil'> Accueil </MenuButton></div>
            <ul>
                <li><MenuButton viewId = 'jeux'> Jeux </MenuButton></li>
                <li><MenuButton viewId = 'licences'> Licences </MenuButton></li>
                <li><MenuButton viewId = 'développeur'> Développeur </MenuButton></li>
                <li><MenuButton viewId = 'editeur'> Editeur </MenuButton></li>
                <li><MenuButton viewId = 'plateforme'> Plateforme </MenuButton></li>
            </ul>

            <div><MenuButton viewId = 'playlists'> Playlists </MenuButton></div>
            <ul>
                <li><MenuButton viewId = 'playlist1'> Playlist 1 </MenuButton></li>
                <li><MenuButton viewId = 'playlist2'> Playlist 2 </MenuButton></li>
            </ul>
        </div>
      );
}

export default Menu;
