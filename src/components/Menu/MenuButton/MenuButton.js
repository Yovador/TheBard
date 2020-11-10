import React, { Children } from 'react';
import style from "./MenuButton.module.css";
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const MenuButton = (props) =>{

  const {children, viewId, level} = props
  console.log (level);

  let varclassName = style.menuButton 
  if (level == 1) {
    //varclassName = varclassName + ' ' + style.menuButtonLevel1;
    varclassName = `${varclassName} ${style.menuButtonLevel1}`;
  }
  
  return (   
    <Link className = {varclassName} to={"/"+viewId}> {children} </Link>
  );


}

MenuButton.propTypes = {
  level: PropTypes.number
}
MenuButton.defaultProps = {
  level: 2

}

export default MenuButton;
