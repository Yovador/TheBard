import React from 'react';
import WhiteText from 'components/Text/WhiteText/WhiteText'
import styles from "./Player.module.css";
import Play from "components/Player/TrackButtons/PlayButton/Play"
import Shuffle from "components/Player/TrackButtons/ShuffleButton/Shuffle"
import Loop from "components/Player/TrackButtons/LoopButton/Loop"
import Mute from "components/Player/TrackButtons/MuteButton/Mute"

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
                <p>
                    <WhiteText>Rayman Legends - Whistle GlouGlou de Christophe Heral</WhiteText>
                </p>
                <img src ="assets/image/TrackBar.png" alt ="Code not loaded" />
            </div>
            <div className = {styles.musicplayervolumebox}>
                <Mute/>
                <img src ="assets/image/VolumeBar.png" alt ="Code not loaded" />
            </div>


        </div>

      );

}

export default Player;
