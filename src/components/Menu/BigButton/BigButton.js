import React, { Children } from 'react';
import MenuButton from 'components/MenuButton/MenuButton';
import styles from './BigButton.module.css'


const BigButton = (props) =>{

  const {children, viewId} = props

    return (   
      <MenuButton viewId = {viewId}>
        <div className = {styles.bigbuttontest}>
          {children}
        </div>
      </MenuButton>
      );


}

export default BigButton;
