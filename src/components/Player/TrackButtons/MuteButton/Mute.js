import React, { useState } from 'react';

const Mute = () =>{

    const [isMute, setIsMute] = useState(false);
    const toggleMute = () => {
        setIsMute(!isMute)
     
    }

    return (
        <div>
            <div onClick={toggleMute}>
                
             

                {isMute && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/Mute.svg" alt = "Button not loaded" />
                    </div>
                )}


                {!isMute && (
                    <div className = {styles.TrackButton}>
                        <img src = "assets/image/VolumeIcon.svg" alt = "Button not loaded" />
                    </div>
                )}
            </div>
        </div>

      );

}

export default Mute;