import React from 'react';
import styles from "./Compte.module.css";

const Compte = () =>{

    return (
      <div className = {styles.compte}>
        <img id="imgcompt1" alt="" src="assets/image/compte.svg"/>
        <div className={styles.compteText}>Compte </div>
        <img id="imgcompt2" alt="" src="assets/image/param.svg"/>

         </div>
      );

}

export default Compte;