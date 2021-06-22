import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {logIn} from '../../../store/CurrentAdmin/actions';
import styles from './login.module.css';
import Input from '../../../components/common/Input/Input';
import Button from "../../../components/common/Button/Button";


const Login = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginHandler = () => {
    if (login && password) {
      dispatch(logIn(login, password));
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.form}>
        <h2>Вхід</h2>
        <Input
          label={'Login'}
          placeholder={'Login'}
          value={login}
          setValue={setLogin}
          require={true} />
        <Input
          type={'password'}
          label={'Password'}
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          require={true} />
        <Button
          className={styles.button}
          onClick={loginHandler}
          title={'Увійти'} />
      </div>

    </div>
  );
};

export default Login;
