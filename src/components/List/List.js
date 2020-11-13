import React from "react";
import styles from './List.module.css'

const List = (props) =>{

    const {children} = props

    return(
        <div className = {styles.list}>{children}</div>
    )

}

export default List