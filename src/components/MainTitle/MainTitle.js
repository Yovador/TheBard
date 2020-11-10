import React from 'react';
import styles from './MainTitle.module.css';


const MainTitle = (props) =>{

    const {children} = props

    return (
        <center>

        <div>
            {children}
        </div>
        
        </center>
      );

}

export default MainTitle;