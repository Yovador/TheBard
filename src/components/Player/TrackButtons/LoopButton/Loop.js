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
            <button onClick={toggleLoop}>
                <img src = "" alt = "Code not loaded" />
            </button>

             {isLooping && (
                <div >
                    <img src = "" alt = "Code not loaded" />
                </div>
             )}
        </div>
        
      );

}

export default Loop;