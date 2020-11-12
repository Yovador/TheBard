import React from 'react';
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
        <Link to={"/"+viewId} className={styles.alink}>
            <div className = {styles.logotest}>
                <img src = {imgPath} alt="[Logo Not Loading]"/>
                <div>{children}</div>
            </div>
        </Link>
      );
}

export default Logo;
