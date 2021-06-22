import React from 'react';
import styles from './wrapper.module.css';
import Navigation from "../Navigation/Navigation";

const Wrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Wrapper;
