import React from 'react';
import React, { useState } from 'react';
import styles from "./Play.module.css";

const Play = () =>{

    const [isPlaying, setIsPlaying] = useState(false);
    const isPlaying = () => {
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
            <p>
                Play da music
            </p>
        </div>
        
      );

}

export default Play;