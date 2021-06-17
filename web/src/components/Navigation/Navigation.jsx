import React from 'react';
import styles from './navigation.module.css';
import CartButton from '../CartButton/CartButton';
import Logo from "../Logo/Logo";

const Navigation = () => {

  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <CartButton />
      </nav>
      <hr className={styles.hr}/>
    </div>
  );
};

export default Navigation;
