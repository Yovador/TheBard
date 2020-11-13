import React, { useState } from 'react';

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
                
            

                {isLooping && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/LoopHover.svg" alt = "Button not loaded" />
                    </div>
                )}


                {!isLooping && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/Loop.svg" alt = "Button not loaded" />
                    </div>
                )}

            </div>
        </div>
        
      );
}

export default Loop ;