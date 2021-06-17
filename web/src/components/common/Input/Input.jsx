import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
  return (
    <div className={styles.inputDiv}>
      <label className={styles.label}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder} />
    </div>

  );
};

export default Input;
