import React from 'react';
import styles from './ItemInfo.module.css';


const ItemInfo = (props) =>{

    const {children} = props

    return (
        <div>
             {children}
        </div>
        
      );

}

export default ItemInfo;