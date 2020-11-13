import React, { useState } from 'react';
import styles from "./Playlist.module.css";
import MenuButton from "../MenuButton/MenuButton";

const Playlist = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const togglePlaylist = () => {
        setIsOpen(!isOpen)
        // if (blockIsVisible === true) {
        //   setBlockIsVisible(false)
        // }
        // else if (blockIsVisible === false) {
        //   setBlockIsVisible(true)
        // }
    }

    return (
        <div>
            <div onClick={togglePlaylist}>
                <MenuButton   level={1}   viewId = 'playlists' > Playlist      </MenuButton>
            </div>

             {isOpen && (
                <ul>
                    <li>    <MenuButton viewId = 'playlist1' > Playlist 1       </MenuButton>   </li>
                    <li>    <MenuButton viewId = 'playlist2' > Playlist 2       </MenuButton>   </li>
                </ul> 
             )}
        </div>

      );

}

export default Playlist;