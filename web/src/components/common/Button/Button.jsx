import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  return (
    <button
      className={`
        ${styles.button}
        ${props.className}
      `}
      onClick={() => props.onClick() }>
      {props.title}
    </button>
  );
};

export default Button;
