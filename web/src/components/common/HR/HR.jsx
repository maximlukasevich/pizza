import React from 'react';
import styles from './hr.module.css';

const HR = (props) => {
  return <hr
    className={`
    ${styles.hr}
    ${props.className}
    `} />
};

export default HR;
