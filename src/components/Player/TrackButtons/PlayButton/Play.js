import React, { useState } from 'react';
import styles from "./Play.module.css";

const Play = () =>{

    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
        // if (blockIsVisible === true) {
        //   setBlockIsVisible(false)
        // }
        // else if (blockIsVisible === false) {
        //   setBlockIsVisible(true)
        // }
    }

    return (
        <div>
            <button onClick={togglePlay}>
                <img src = "assets/image/Play.png" alt = "Button not loaded" />
             </button>

             {isPlaying && (
                <div >
                    <img src = "assets/image/Pause.png" alt = "Button not loaded" />
                </div>
             )}
        </div>

      );

}

export default Play;