import React from 'react';
import styles from './PlaylistTitle.module.css';


const PlaylistTitle = (props) =>{

    const {children} = props

    return (
        <center>

        <div>
            {children}
        </div>
        
        </center>
      );

}

export default PlaylistTitle;