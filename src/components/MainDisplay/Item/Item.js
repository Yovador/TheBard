import React from 'react';
import styles from './Item.module.css';
import ItemName from './ItemName/ItemName'
import ItemImg from './ItemImg/ItemImg'
import ItemInfo from './ItemInfo/ItemInfo'

const Item = (props) =>{

    const{children, imgPath, info} = props

    return (
        <div className={styles.container}>
            <center>
                <ItemImg imgPath={imgPath} />
                <ItemName> {children} </ItemName>
                <ItemInfo> {info} </ItemInfo>
            </center>
        </div>
      );

}

export default Item;