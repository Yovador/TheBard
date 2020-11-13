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
                
            

                {isLooping && (
                    <div className = {styles.TrackButton}>
<svg xmlns="http://www.w3.org/2000/svg" width="18.428" height="25.339" viewBox="0 0 18.428 25.339"><g transform="translate(4524 10141.67)"><g transform="translate(-4524 -10141.67)"><path d="M73.214,155.5a6.912,6.912,0,0,1-6.11-10.141l-1.682-1.682a9.209,9.209,0,0,0,7.791,14.126v3.455l4.607-4.607-4.607-4.607Z" transform="translate(-64 -135.922)" fill="#ee2b47"/><path d="M153.941,3.455V0l-4.607,4.607,4.607,4.607V5.759a6.912,6.912,0,0,1,6.11,10.141l1.682,1.682a9.209,9.209,0,0,0-7.791-14.126Z" transform="translate(-144.727)" fill="#ee2b47"/></g></g></svg>                    </div>
                )}


                {!isLooping && (
                    <div className = {styles.TrackButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.428" height="25.339" viewBox="0 0 18.428 25.339"><g transform="translate(4524 10141.67)"><g transform="translate(-4524 -10141.67)"><path d="M73.214,155.5a6.912,6.912,0,0,1-6.11-10.141l-1.682-1.682a9.209,9.209,0,0,0,7.791,14.126v3.455l4.607-4.607-4.607-4.607Z" transform="translate(-64 -135.922)"/><path d="M153.941,3.455V0l-4.607,4.607,4.607,4.607V5.759a6.912,6.912,0,0,1,6.11,10.141l1.682,1.682a9.209,9.209,0,0,0-7.791-14.126Z" transform="translate(-144.727)" /></g></g></svg>
                    </div>
                )}

            </div>
        </div>
        
      );
}

export default Loop ;