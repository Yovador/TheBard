import React from 'react';
import styles from './ItemImg.module.css';

const ItemImg = (props) =>{

    const {imgPath} = props

    return (
        <div className = {styles.ItemImg}>
            <img src = {imgPath} alt="[Logo Not Loading]"/>
        </div>
      );

}

export default ItemImg;