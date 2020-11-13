import React from 'react';
import styles from './SearchBar.module.css';


const SearchBar = () =>{


    return (

        <div className={styles.SearchBar}>
          <div className={styles.position}>
            <input className={styles.input} type="text" id="name" name="name" requiredminlength="4" maxlength="10" size="20" placeholder="Recherche..."/>
            <img alt="" src="assets/image/loupe.svg"/>
           </div>
        </div>
        
      );

}

export default SearchBar;