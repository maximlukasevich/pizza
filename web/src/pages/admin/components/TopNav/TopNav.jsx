import React from 'react';
import {connect} from "react-redux";
import styles from './top-nav.module.css';

const TopNav = ({admin}) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.admin}>
        {admin.login}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  admin: state.currentAdmin.admin
});

export default connect(mapStateToProps)(TopNav);
