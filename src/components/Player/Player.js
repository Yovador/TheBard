import React from 'react';

import styles from "./Player.module.css";
import Play from "components/Player/TrackButtons/PlayButton/Play"

const Player = () =>{

    

    return (
        <div className = {styles.musicplayer}>
            <div className = {styles.musicplayerimagebox}>
                <img className = {styles.musicplayerimage} src = "assets/image/rayman_origins_logo.jpg" alt = "[cover art not loaded]" />
            </div>
            <div className = {styles.musicplayerbutttonbox}>
                <Play/>
            </div>
         
        </div>
        
      );

}

export default Player;