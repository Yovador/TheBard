import React from 'react';

import styles from "./Player.module.css";
import Play from "components/Player/TrackButtons/PlayButton/Play"
import Shuffle from "components/Player/TrackButtons/ShuffleButton/Shuffle"
import Loop from "components/Player/TrackButtons/LoopButton/Loop"

const Player = () =>{



    return (
        <div className = {styles.musicplayer}>
            <div className = {styles.musicplayerimagebox}>
                <img className = {styles.musicplayerimage} src = "assets/image/rayman_origins_logo.jpg" alt = "[cover art not loaded]" />
            </div>
            <div className = {styles.musicplayerplaybox}>
                <Play/>
            </div>
            <div className = {styles.musicplayershuffleloopbox}>
                <Shuffle/>           
                <Loop/>
            </div>
            <div className = {styles.musicplayerbarbox}>
                <img src ="assets/image/tracksDuration.png" alt ="Code not loaded" />
            </div>
            <div className = {styles.musicplayervolumebox}>
                <img src ="assets/image/Volume.png" alt ="Code not loaded" />
            </div>


        </div>

      );

}

export default Player;
