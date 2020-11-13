import React, { useState } from 'react';

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
                    <div >
                        <img src = "assets/image/ShuffleHover.svg" alt = "Button not loaded" />
                    </div>
                )}


                {!isShuffling && (
                    <div >
                        <img src = "assets/image/Shuffle.svg" alt = "Button not loaded" />
                    </div>
                )}

            </div>
        </div>
        
      );

}

export default Shuffle;