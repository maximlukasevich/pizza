import React from 'react';
import styles from './admin-navigation.module.css';

import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logOut} from "../../store/CurrentAdmin/action";

const AdminNavigation = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.nav}>

      <NavLink className={styles.link} to={'/admin/orders'}>Замовлення</NavLink>
      <NavLink className={styles.link} to={'/admin/pizza'}>Список піци</NavLink>
      <NavLink className={styles.link} to={'/admin/pizza/create'}>Додати піцу</NavLink>

      <NavLink onClick={e => dispatch(logOut())} className={styles.link} to={'/pizza'}>Вийти</NavLink>

    </div>
  );
};

export default AdminNavigation;
