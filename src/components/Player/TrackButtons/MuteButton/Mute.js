import React, { useState } from 'react';
import styles from "./Mute.module.css";

const Mute = () =>{

    const [isMute, setIsMute] = useState(false);
    const toggleMute = () => {
        setIsMute(!isMute)
     
    }

    return (
        <div>
            <div onClick={toggleMute}>
                
             

                {isMute && (
                    <div >
                        <img src = "assets/image/Mute.svg" alt = "Button not loaded" />
                    </div>
                )}


                {!isMute && (
                    <div >
                        <img src = "assets/image/VolumeIcon.svg" alt = "Button not loaded" />
                    </div>
                )}
            </div>
        </div>

      );

}

export default Mute;