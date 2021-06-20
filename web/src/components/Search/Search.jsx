import React from 'react';
import styles from './search.module.css';
import {SearchOutlined} from '@ant-design/icons';

const Search = () => {
  return (
    <div className={styles.search} onClick={() => alert('В розробці...')}>
      <input type='text' className={styles.input} placeholder='Пошук...' />
      <button type='submit' className={styles.button} >
        <SearchOutlined className={styles.icon} />
      </button>
    </div>
  );
};

export default Search;

