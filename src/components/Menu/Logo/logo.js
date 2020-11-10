import React from 'react';
import MenuButton from 'components/MenuButton/MenuButton';
import styles from './logo.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Logo = (props) =>{
    const {imgPath, children, viewId} = props

    return (
        <Link to={"/"+viewId}>
            <div className = {styles.logotest}>
                <img src = {imgPath} alt="[Logo Not Loading]"/>
                <div className={styles.theBard}>{children}</div>
            </div>
        </Link>
      );
}

export default Logo;
