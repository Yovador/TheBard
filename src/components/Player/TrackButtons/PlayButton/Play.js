import React, { useState } from 'react';
import styles from "./Play.module.css";

const Play = () =>{

    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
     
    }

    return (
        <div>
            <div onClick={togglePlay}>
                {isPlaying && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/Pause.png" alt = "Button not loaded" />
                    </div>
                )}


                {!isPlaying && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/Play.png" alt = "Button not loaded" />
                    </div>
                )}
            </div>
        </div>

      );

}

export default Play;