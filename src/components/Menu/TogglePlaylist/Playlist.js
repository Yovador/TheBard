import React, { useState } from 'react';
import styles from "./Playlist.module.css";

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
                Play
             </div>

             {isOpen && (
                <div >
                    playlist menu is open
                </div>
             )}
        </div>

      );

}

export default Playlist;