import React, { useState } from 'react';
import styles from "./Loop.module.css";

const Loop = () =>{

    const [isLooping, setIsLooping] = useState(false);
    const toggleLoop = () => {
        setIsLooping(!isLooping)
        // if (blockIsVisible === true) {
        //   setBlockIsVisible(false)
        // }
        // else if (blockIsVisible === false) {
        //   setBlockIsVisible(true)
        // }
    }

    return (
        <div>
            <div onClick={toggleLoop}>
                <img src = "assets/image/loop.png" alt = "Code not loaded" />
            </div>

             {isLooping && (
                <div >
                    loop on
                </div>
             )}
        </div>
        
      );

}

export default Loop;