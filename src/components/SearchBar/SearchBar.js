import React from 'react';
import styles from './SearchBar.module.css';


const SearchBar = (props) =>{

    const {children} = props

    return (

        <div className={styles.SearchBar}>
           SearchBar
        </div>
        
      );

}

export default SearchBar;