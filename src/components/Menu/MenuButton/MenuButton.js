import React, { Children } from 'react';
import style from "./MenuButton.module.css"
const changeMainView = (view) => {
  console.log(view)
}

const MenuButton = (props) =>{

    const {children, viewId} = props

    return (
        <button onClick={() => {changeMainView(viewId)}}> {children} </button>
      );


}

export default MenuButton;