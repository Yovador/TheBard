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
                    <div  className = {styles.TrackButton1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.109" height="25.471" viewBox="0 0 29.109 25.471"><g transform="translate(4601.975 10142.238)"><g transform="translate(-4601.975 -10142.238)"><path d="M10.425,103.761l2.5,2.854,3.117-3.562-2.084-2.381a11.728,11.728,0,0,0-8.829-4.008H0v4.693H5.127a7.039,7.039,0,0,1,5.3,2.4Z" transform="translate(0 -91.972)" /><path d="M23.651,50.415h-.337a5.457,5.457,0,0,1-4.108-1.864l-3.145-3.594,3.145-3.594A5.457,5.457,0,0,1,23.314,39.5h.337v3.639l5.458-5.458-5.458-5.458v3.639h-.337a9.093,9.093,0,0,0-6.845,3.107L8.083,48.551a5.458,5.458,0,0,1-4.108,1.864H0v3.639H3.975a9.093,9.093,0,0,0,6.845-3.107l2.824-3.227,2.824,3.227a9.093,9.093,0,0,0,6.845,3.107h.337v3.639l5.458-5.458-5.458-5.458Z" transform="translate(0 -32.222)" /></g></g></svg>                    
                    </div>
                )}


                {!isShuffling && (
                    <div  className = {styles.TrackButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.109" height="25.471" viewBox="0 0 29.109 25.471"><g transform="translate(4601.975 10142.238)"><g transform="translate(-4601.975 -10142.238)"><path d="M10.425,103.761l2.5,2.854,3.117-3.562-2.084-2.381a11.728,11.728,0,0,0-8.829-4.008H0v4.693H5.127a7.039,7.039,0,0,1,5.3,2.4Z" transform="translate(0 -91.972)" /><path d="M23.651,50.415h-.337a5.457,5.457,0,0,1-4.108-1.864l-3.145-3.594,3.145-3.594A5.457,5.457,0,0,1,23.314,39.5h.337v3.639l5.458-5.458-5.458-5.458v3.639h-.337a9.093,9.093,0,0,0-6.845,3.107L8.083,48.551a5.458,5.458,0,0,1-4.108,1.864H0v3.639H3.975a9.093,9.093,0,0,0,6.845-3.107l2.824-3.227,2.824,3.227a9.093,9.093,0,0,0,6.845,3.107h.337v3.639l5.458-5.458-5.458-5.458Z" transform="translate(0 -32.222)" /></g></g></svg>
                    </div>
                )}

            </div>
        </div>
        
      );

}

export default Shuffle;