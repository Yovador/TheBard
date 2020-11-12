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
                Play
             </button>

             {isPlaying && (
                <div >
                    the track is playing
                </div>
      )}
        </div>

      );

}

export default Play;