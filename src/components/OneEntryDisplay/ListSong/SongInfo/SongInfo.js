import React from 'react';
import WhiteText from 'components/Text/WhiteText/WhiteText';
import PlaylistAddButton from './PlaylistAddButton/PlaylistAddButton';
import styles from './SongInfo.module.css';
import SongNumber from './SongNumber/SongNumber';


const SongInfo = (props) =>{

    const {number, name, artist, length} = props

    return(
        <div className={styles.infosmusic}>
            <div className={styles.longueur10}><SongNumber > {number} </SongNumber></div>
            <div className={styles.longueur30}><WhiteText > {name} </WhiteText></div>
            <div className={styles.longueur40}><WhiteText > {artist} </WhiteText></div>
            <div className={styles.longueur10}><WhiteText > {length} </WhiteText></div>
            <div className={styles.longueur10}><PlaylistAddButton /></div>
        </div>
    )

}

export default SongInfo;
