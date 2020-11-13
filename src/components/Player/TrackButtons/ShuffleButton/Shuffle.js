import React, { useState } from 'react';
import styles from "./Shuffle.module.css";
const Shuffle = () =>{

    const [isShuffling, setIsShuffling] = useState(false);
    const toggleShuffle = () => {
        setIsShuffling(!isShuffling)
        // if (blockIsVisible === true) {
        //   setBlockIsVisible(false)
        // }
        // else if (blockIsVisible === false) {
        //   setBlockIsVisible(true)
        // }
    }

    return (

        <div>
            <div onClick={toggleShuffle}>
                
            

                {isShuffling && (
                    <div  className = {styles.TrackButton}>
                        <img src = "assets/image/ShuffleHover.svg" alt = "Button not loaded" />
                    </div>
                )}


                {!isShuffling && (
                    <div  className = {styles.TrackButton}>
                        <img src = "assets/image/Shuffle.svg" alt = "Button not loaded" />
                    </div>
                )}

            </div>
        </div>
        
      );

}

export default Shuffle;