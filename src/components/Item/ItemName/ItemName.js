import React from 'react';
import styles from './ItemName.module.css';



const ItemName = (props) =>{

    const {children} = props

    return (
        <div>
             {children}
        </div>
        
      );

}

export default ItemName;