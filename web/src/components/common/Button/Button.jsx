import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={e => props.onClick()} >
      {props.title}
    </button>
  );
};

export default Button;
