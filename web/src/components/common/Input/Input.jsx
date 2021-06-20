import React, {useState} from 'react';
import styles from './input.module.css';

const Input = (props) => {

  const require = props.require || false;
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState(props.value === '' ? `* Поле «${props.label}» не може бути пустим.` : '');

  const changeHandler = (e) => {
    if (e.target.value !== '') {
      setError('');
    } else {
      setError('* Поле не може бути пустим');
    }
    props.setValue(e.target.value);
  }

  return (
    <div className={styles.inputDiv}>
      <label className={styles.label}>
        {props.label}
        {(error && dirty && require) && <span className={styles.error}>{error}</span>}
      </label>

      {props.type === 'file' ? <>
        <input
          className={styles.input}
          type={props.type}
          value={props.value}
          onBlur={() => setDirty(true)}
          onChange={e => props.onLoad(e)} />
      </> : <>
        <input
          className={styles.input}
          type={props.type || 'text'}
          value={props.value}
          onBlur={() => setDirty(true)}
          onChange={e => changeHandler(e)}
          placeholder={props.placeholder} />
      </>}
    </div>
  );
};

export default Input;
