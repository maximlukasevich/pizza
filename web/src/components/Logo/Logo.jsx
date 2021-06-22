import React from 'react';
import styles from './logo.module.css'
import logo from '../../assets/logo/logo.svg';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Logo = () => {

  const isAuth = useSelector(state => state.currentAdmin.isAuth);

  return (
    <div className={styles.logo}>
      <img src={logo} alt="Pizza Logo" className={styles.logoImage}/>
      <div className={styles.logoText}>
        <h1>Full-Stack Pizza {isAuth ? <NavLink className={styles.admin} to={'/admin'}>adminPanel</NavLink> : '' } </h1>
        <p>MERN stack</p>
      </div>
    </div>
  );
};

export default Logo;
