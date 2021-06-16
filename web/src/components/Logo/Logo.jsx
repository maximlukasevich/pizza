import React from 'react';
import styles from './logo.module.css'
import logo from '../../assets/logo/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Pizza Logo" className={styles.logoImage}/>
      <div className={styles.logoText}>
        <h1>Full-Stack Pizza</h1>
        <p>MERN stack</p>
      </div>
    </div>
  );
};

export default Logo;
