import React from 'react';
import styles from './admin-container.module.css';
import TopNav from "../TopNav/TopNav";
import SideNav from "../SideNav/SideNav";

const AdminContainer = (props) => {
  return (
    <div className={styles.adminPage}>
      <div className={styles.sideNav}>
        <SideNav />
      </div>

      <div className={styles.wrapper}>
        <TopNav />

        <div className={styles.content}>
          {props.children}
        </div>
      </div>

    </div>
  );
};

export default AdminContainer;
