import React from 'react';
import styles from './Global.module.css';


const Global = (props) =>{
    const {children} = props
    return (
        <div>
          {children}
        </div>
      );
}

export default Global;