import React from 'react';
import styles from './GreyText.module.css';


const GreyText = (props) =>{

    const {children} = props

    return (
        <div className={styles.grey}>
             {children}
        </div>
        
      );

}

export default GreyText;