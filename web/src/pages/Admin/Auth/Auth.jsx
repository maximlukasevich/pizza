import React, {useState} from 'react';
import styles from './auth.module.css';
import Input from '../../../components/common/Input/Input';
import Button from '../../../components/common/Button/Button';
import {useDispatch} from 'react-redux';

import {logIn as loginFunc} from '../../../store/CurrentAdmin/action';

const Auth = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <div className={styles.auth}>
      <h3>Вхід</h3>
      <Input
        placeholder={'login'}
        label={'Login'}
        value={login}
        setValue={setLogin}
        require />
      <Input
        placeholder={'password'}
        type={'password'}
        label={'Password'}
        value={password}
        setValue={setPassword}
        require />
      <Button title={'Увійти'} onClick={e => dispatch(loginFunc(login, password))} />
    </div>
  );
};

export default Auth;
