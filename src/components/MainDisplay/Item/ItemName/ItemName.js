import React from 'react';
import styles from './ItemName.module.css';
import WhiteText from "components/Text/WhiteText/WhiteText";


const ItemName = (props) =>{

    const {children} = props

    return (
        <WhiteText>
             {children}
        </WhiteText>    
      );

}

export default ItemName;