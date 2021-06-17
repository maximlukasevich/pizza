import React from 'react';
import styles from './textarea.module.css';

const TextArea = (props) => {
  return (
    <div className={styles.inputDiv}>
      <label className={styles.label}>
        {props.label}
      </label>
      <textarea
        placeholder={props.placeholder}
        value={props.value}
        className={styles.input}
        cols="30"
        rows="3" />
    </div>
  );
};

export default TextArea;
