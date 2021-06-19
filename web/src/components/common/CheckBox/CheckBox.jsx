import React from 'react';
import nextId from 'react-id-generator';
import styles from './checkbox.module.css';
import {CheckOutlined} from '@ant-design/icons';

const CheckBox = (props) => {

  const componentId = nextId();

  return (
    <div className={styles.checkbox}>

      <input
        className={styles.input}
        type="checkbox"
        value={props.value}
        onChange={e => props.setValue(e.target.checked)}
        id={componentId}
      />
      <label
        className={styles.label}
        htmlFor={componentId} >
        {props.label}

        <span className={styles.check}>
          <CheckOutlined className={styles.icon} />
        </span>

      </label>

    </div>
  );
};

export default CheckBox;
