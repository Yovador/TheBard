import React from 'react';
import styles from './Item.module.css';
import ItemName from './ItemName/ItemName'
import ItemImg from './ItemImg/ItemImg'
import ItemInfo from './ItemInfo/ItemInfo'
import { Link } from 'react-router-dom';

const Item = (props) =>{

    const{children, imgPath, info, viewId} = props

    return (
        <div className={styles.container}>
            <center>
            <Link to={viewId} className={styles.alink}>
                <ItemImg imgPath={imgPath} />
                <ItemName> {children} </ItemName>
                <ItemInfo> {info} </ItemInfo>
            </Link>
            </center>
        </div>
      );

}

export default Item;