import React from 'react';
import styles from "./Compte.module.css";
import MenuButton from "components/MenuButton/MenuButton";


const Compte = () =>{

    return (
      <div className = {styles.compte}>   <MenuButton     viewId = ''          >  Compte         </MenuButton>    </div>
      );

}

export default Compte;