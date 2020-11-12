import React from 'react';

import styles from "./Player.module.css";
import Play from "components/Player/TrackButtons/PlayButton/Play"

const Player = () =>{

    

    return (
        <div className = {styles.musicplayer}>
            <div className = {styles.musicplayerimage}>
                
            </div>
            <div className = {styles.musicplayerimage}>
                <Play/>
            </div>
         
        </div>
        
      );

}

export default Player;