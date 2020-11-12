import React from 'react';
import styles from './ItemInfo.module.css';
import GreyText from "components/Text/GreyText/GreyText";


const ItemInfo = (props) =>{
    const {children} = props
    return (
        <GreyText>
             {children}
        </GreyText>
      );
}


export default ItemInfo;