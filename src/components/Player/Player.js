import React from 'react';
import styles from "./Player.module.css";

const Player = () =>{

    return (
        <div className = {styles.musicplayer}>
            <div className = {styles.musicplayerimage}>
                <img src="rayman_origins_logo" alt="Jeu rayman"  ></img>
            </div>
         
        </div>
        
      );

}

export default Player;