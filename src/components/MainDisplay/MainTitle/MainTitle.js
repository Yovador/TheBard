import React from 'react';
import styles from './MainTitle.module.css';


const MainTitle = (props) =>{

    const {children} = props

    return (

        <div className={styles.mainTitle}>
            {children}
        </div>
        
      );

}

export default MainTitle;