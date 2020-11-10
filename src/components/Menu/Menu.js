import React from 'react';
import styles from "./Menu.module.css";
import MenuButton from "components/MenuButton/MenuButton";
import Logo from "./Logo/logo";
import BigButton from "./BigButton/BigButton";


const Menu = () =>{


    return (
        <div className = {styles.sidenav}>

            <div>   <Logo           viewId = '' imgUrl='https://tinyurl.com/yy433x2b'> The Bard </Logo> </div>
            <div>   <MenuButton   level={1}   viewId = ''          >  Accueil         </MenuButton>    </div>
            <ul>
                <li>    <MenuButton viewId = 'jeux'      >  Jeux            </MenuButton>   </li>
                <li>    <MenuButton viewId = 'licence'   >  Licences        </MenuButton>   </li>
                <li>    <MenuButton viewId = 'dev'       >  Développeur     </MenuButton>   </li>
                <li>    <MenuButton viewId = 'editeur'   >  Editeur         </MenuButton>   </li>
                <li>    <MenuButton viewId = 'plateforme'>  Plateforme      </MenuButton>   </li>
            </ul>

            <div>   <MenuButton   level={1}   viewId = 'playlists' > Playlists        </MenuButton>    </div>
            <ul>
                <li>    <MenuButton viewId = 'playlist1' > Playlist 1       </MenuButton>   </li>
                <li>    <MenuButton viewId = 'playlist2' > Playlist 2       </MenuButton>   </li>
            </ul>
        </div>
      );
}

export default Menu;
