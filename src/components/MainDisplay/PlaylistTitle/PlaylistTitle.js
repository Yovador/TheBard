import React from 'react';
import styles from './PlaylistTitle.module.css';


const PlaylistTitle = (props) =>{

    const {children} = props

    return (

        <div className={styles.title}>
            {children}
        </div>
        
      );

}

export default PlaylistTitle;