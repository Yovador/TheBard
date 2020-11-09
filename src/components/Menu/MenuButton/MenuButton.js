import React, { Children } from 'react';
import style from "./MenuButton.module.css"
import DynamicMainView from "components/DynamicMainView/index.js";






const MenuButton = (props) =>{

    const {children, viewId} = props

    const changeMainView = (view) => {
      console.log("Click On : " +view);
    }
    
    
    return (   
        <button className = {style.menuButton} onClick={() => {changeMainView(viewId)}}> {children} </button>

      );


}

export default MenuButton;
