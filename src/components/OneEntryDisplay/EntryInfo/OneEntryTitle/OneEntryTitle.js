import React from 'react';
import styles from './OneEntryTitle.module.css';


const OneEntryTitle = (props) =>{

    const {children} = props

    return (

        <div className={styles.title}>
            {children}
        </div>
        
      );

}

export default OneEntryTitle;