import React from 'react';
import MenuButton from 'components/MenuButton/MenuButton';
import styles from './logo.module.css'


const Logo = (props) =>{
    const {imgPath, children, viewId} = props

    return (
        <MenuButton  viewId = {viewId}>
            <div className = {styles.logotest}>
                <img src = 'Logo/logo.png'  /> {children}
            </div>
        </MenuButton>
      );
}

export default Logo;
