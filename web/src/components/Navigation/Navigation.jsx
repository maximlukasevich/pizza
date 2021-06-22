import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigation.module.css';
import CartButton from '../CartButton/CartButton';
import Logo from "../Logo/Logo";
import HR from "../common/HR/HR";

const Navigation = () => {

  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to={'/pizza'}> <Logo /> </NavLink>
        <NavLink to={'/cart'}> <CartButton /> </NavLink>
      </nav>
      <HR className={styles.hr} />
    </div>
  );
};

export default Navigation;
