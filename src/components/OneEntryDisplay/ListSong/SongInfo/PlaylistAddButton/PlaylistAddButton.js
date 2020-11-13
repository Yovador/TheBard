import React from 'react';
import styles from './PlaylistAddButton.module.css';


const PlaylistAddButton = () =>{

    const imgPath = 'assets/image/playlist.svg'

    return(
        <div className={styles.imgjeu}>
            <img src={imgPath} />
        </div>
    )

}

export default PlaylistAddButton;
