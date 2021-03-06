import React from 'react';
import styles from './SongNumber.module.css';


const SongNumber = (props) =>{

    const {children} = props

    const imgPath = 'assets/image/rondRouge.svg'

    return(
        <div className={styles.cont} >
            <img src={imgPath} className={styles.imgjeu} alt=''/>
            <div className={styles.fontnb}>
                {children}
            </div>
        </div>
    )

}

export default SongNumber;
