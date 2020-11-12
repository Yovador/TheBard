import React from 'react';
import styles from './MainImage.module.css';

const MainImage = (props) =>{

    const {imgPath} = props

    return (
        <div>
            <img src = {imgPath} alt="[Image Not Loading]"/>
        </div>
      );

}

export default MainImage;