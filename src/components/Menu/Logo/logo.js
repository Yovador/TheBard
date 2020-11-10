import React from 'react';
import MenuButton from 'components/MenuButton/MenuButton';
import styles from './logo.module.css'


const Logo = (props) =>{
    const {imgUrl, children, viewId} = props

    return (
        <MenuButton  viewId = {viewId}>
            <div className = {styles.logotest}>
                <img src = {imgUrl}/> {children}
            </div>
        </MenuButton>
      );
}

export default Logo;
