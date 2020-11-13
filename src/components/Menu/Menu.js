import React from 'react';
import styles from "./Menu.module.css";
import MenuButton from "./MenuButton/MenuButton";
import Logo from "./Logo/logo";
import Compte from "./Compte/Compte";
import Playlist from "./TogglePlaylist/Playlist";



const Menu = () =>{

    const imgPath = 'assets/image/logo.svg' ;

    return (
        <div className = {styles.sidenav}>

            <div>   <Logo         viewId = '' imgPath={imgPath}> The Bard </Logo> </div>
            <div>   <MenuButton   level={1}   viewId = ''          >  Accueil         </MenuButton>    </div>
            <ul>
                <li>    <MenuButton viewId = 'jeux'      >  Jeux            </MenuButton>   </li>
                <li>    <MenuButton viewId = 'licence'   >  Licences        </MenuButton>   </li>
                <li>    <MenuButton viewId = 'dev'       >  Développeur     </MenuButton>   </li>
                <li>    <MenuButton viewId = 'artiste'   >  Artiste         </MenuButton>   </li>
                <li>    <MenuButton viewId = 'editeur'   >  Editeur         </MenuButton>   </li>
                <li>    <MenuButton viewId = 'plateforme'>  Plateforme      </MenuButton>   </li>
            </ul>

{/*
            <div>   <MenuButton   level={1}   viewId = 'playlists' > <Playlist/>        </MenuButton>    </div>
             <ul>
                <li>    <MenuButton viewId = 'playlist1' > Playlist 1       </MenuButton>   </li>
                <li>    <MenuButton viewId = 'playlist2' > Playlist 2       </MenuButton>   </li>
            </ul> */}


            <div class="dropdown">
                <MenuButton href="javascript:void(0)" class="dropbtn" onclick="myFunction()"   level={1}   viewId = 'playlists' >Dropdown</MenuButton>
                <ul class="dropdown-content" id="myDropdown">
                    <li>    <MenuButton viewId = 'playlist1' > Playlist 1       </MenuButton>   </li>
                    <li>    <MenuButton viewId = 'playlist2' > Playlist 2       </MenuButton>   </li>
                </ul>
            </div>

            <div><Compte/></div>

      
        </div>
      );
}

export default Menu;


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

