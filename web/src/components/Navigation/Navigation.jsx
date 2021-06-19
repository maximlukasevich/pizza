import React from 'react';
import styles from './navigation.module.css';
import CartButton from '../CartButton/CartButton';
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import AdminNavigation from "../AdminNavigation/AdminNavigation";

const Navigation = (props) => {

  return (
    <div>
      <nav className={styles.nav}>

        <NavLink to={'/pizza'}> <Logo /> </NavLink>
        <NavLink to={'/cart'}> <CartButton /> </NavLink>

      </nav>
      {props.isAuth && <AdminNavigation />}
      <hr className={styles.hr}/>
    </div>
  );
};

export default Navigation;
