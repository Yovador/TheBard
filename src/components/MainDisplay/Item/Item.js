import React from 'react';
import styles from './Item.module.css';
import WhiteText from 'components/Text/WhiteText/WhiteText'
import ItemImg from './ItemImg/ItemImg'
import GreyText from 'components/Text/GreyText/GreyText'
import { Link } from 'react-router-dom';

const Item = (props) =>{

    const{children, imgPath, info, viewId} = props

    return (
        <div className={styles.container1}>
            <Link to={viewId} className={styles.alink}>
                <ItemImg imgPath={imgPath} />
                <WhiteText > {children} </WhiteText>    
                <GreyText > {info} </GreyText>
            </Link>
        </div>
      ); 

}

export default Item;