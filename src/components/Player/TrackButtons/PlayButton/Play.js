<<<<<<< HEAD
import React from 'react';
//import React, { useState } from 'react';
=======

import React, { useState } from 'react';
>>>>>>> 9158c1f7e3b3922e5b2a5b43b06133248c20d552
import styles from "./Play.module.css";

const Play = () =>{

<<<<<<< HEAD
    /*const [isPlaying, setIsPlaying] = useState(false);
    const isPlaying = () => {
=======
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
>>>>>>> 9158c1f7e3b3922e5b2a5b43b06133248c20d552
        setIsPlaying(!isPlaying)
        // if (blockIsVisible === true) {
        //   setBlockIsVisible(false)
        // }
        // else if (blockIsVisible === false) {
        //   setBlockIsVisible(true)
        // }
    }
*/
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