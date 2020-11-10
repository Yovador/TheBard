import React, { Children } from 'react';
import style from "./MenuButton.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






const MenuButton = (props) =>{

  const {children, viewId} = props


    
    return (   
        <Link className = {style.menuButton} to={"/"+viewId}> {children} </Link>
      );


}

export default MenuButton;
