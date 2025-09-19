import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input 
        type=text 
        placeholder=Search images... 
        className={styles.input}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
