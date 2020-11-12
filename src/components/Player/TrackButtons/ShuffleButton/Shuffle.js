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
            <button onClick={toggleShuffle}>Shuffle</button>

             {isShuffling && (
                <div >
                    Shuffle on 
                </div>
             )}
        </div>
        
      );

}

export default Shuffle;