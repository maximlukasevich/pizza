import React from 'react';
import styles from './navigation.module.css';
import Cart from '../Cart/Cart';
import Logo from "../Logo/Logo";

const Navigation = () => {

  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <Cart />
      </nav>
      <hr className={styles.hr}/>
    </div>
  );
};

export default Navigation;
