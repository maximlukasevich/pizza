import React from 'react';
import styles from './header.module.css';
import Search from '../common/Search/Search';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>{props.title || 'Pizza'}</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
