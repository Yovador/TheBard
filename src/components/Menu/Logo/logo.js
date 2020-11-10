import React from 'react';
import MenuButton from 'components/MenuButton/MenuButton';
import styles from './logo.module.css'


const Logo = (props) =>{
    const {imgPath, children, viewId} = props

    return (
        <MenuButton  viewId = {viewId}>
            <div className = {styles.logotest}>
                <img src = {imgPath} alt="[Logo Not Loading]"/> <div className={styles.theBard}>{children}</div>
            </div>
        </MenuButton>
      );
}

export default Logo;
