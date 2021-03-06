import React from 'react';
import styles from './MainImage.module.css';

const MainImage = (props) =>{

    const {imgPath} = props

    return (
        <div>
            <img className={styles.ItemImg} src = {imgPath} alt="[Vignette Not Loading]"/>
        </div>
      );

}

export default MainImage;