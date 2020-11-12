import React from 'react';
import styles from './OneEntryTitle.module.css';


const OneEntryTitle = (props) =>{

    const {children} = props

    return (
        <center>

        <div>
            {children}
        </div>
        
        </center>
      );

}

export default OneEntryTitle;