import React from 'react';
import nextId from 'react-id-generator';
import styles from './radio.module.css';

const Radio = (props) => {

  const inputId = nextId();

  return ( <>
      <input
        id={inputId}
        className={styles.input}
        name={props.name}
        type="radio"
        value={props.value}
      />
    <label className={styles.label} htmlFor={inputId}>
      {props.label}
    </label>
  </>);
};

export default Radio;