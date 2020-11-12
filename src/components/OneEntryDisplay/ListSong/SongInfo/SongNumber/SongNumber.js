import React from 'react';
import styles from './SongNumber.module.css';


const SongNumber = (props) =>{

    const {children} = props

    const imgPath = 'https://tinyurl.com/y58yslj6'

    return(
        <div className={styles.cont} >
            <img src={imgPath} className={styles.imgjeu} />
            <div className={styles.fontnb}>
                {children}
            </div>
        </div>
    )

}

export default SongNumber;
