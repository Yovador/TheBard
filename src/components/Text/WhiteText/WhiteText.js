import React from 'react';
import styles from './WhiteText.module.css';


const WhiteText = (props) =>{

    const {children} = props

    return (
        <div className={styles.white}>
             {children}
        </div>
        
      );

}

export default WhiteText;