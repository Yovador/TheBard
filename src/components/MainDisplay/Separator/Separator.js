import React from 'react';
import styles from './Separator.module.css';

const Separator = (props) =>{

    const {imgPath} = props

    return (
        <center>
            <div className = {styles.logotest}>
                <img src = {imgPath} alt="[Separator Not Loading]"/>
            </div>
        </center>
      );

}

export default Separator;