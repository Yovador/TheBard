import React from 'react';
import styles from './ListElement.module.css';
import Item from 'components/MainDisplay/Item/Item'
import List from "components/List/List";


const ListElement = (props) =>{

    const {list} = props
    const ElementToShow = []
    list.forEach(element => {
        ElementToShow.push(<Item  imgPath={element.imgPath} info={element.elementSub} viewId={element.viewId}> {element.elementName} </Item>)
    });

    
    return(
        <List className={styles.list}>{ElementToShow} </List>
    )

}

export default ListElement;
