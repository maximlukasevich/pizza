import React from 'react';
import styles from './auth.module.css';
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <h3>Вхід</h3>
      <Input placeholder={'login'} label={'Login'} />
      <Input placeholder={'password'} label={'Password'}/>
      <Button title={'Увійти'}/>
    </div>
  );
};

export default Auth;
