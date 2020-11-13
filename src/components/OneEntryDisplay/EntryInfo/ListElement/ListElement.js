import React from 'react';
import styles from './ListElement.module.css';
import Item from 'components/MainDisplay/Item/Item'


const ListElement = (props) =>{

    const {list} = props
    const ElementToShow = []
    list.forEach(element => {
        ElementToShow.push(<Item imgPath={element.imgPath} info={element.elementSub} viewId={element.viewId}> {element.elementName} </Item>)
    });

    return(
        <div>{ElementToShow}</div>
    )

}

export default ListElement;
