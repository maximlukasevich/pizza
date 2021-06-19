import React from 'react';
import styles from './button.module.css';
import {ShoppingOutlined, CheckOutlined} from "@ant-design/icons";

const ToCartButton = (props) => {
  return (
      <button
        className={`
        ${styles.button}
        ${props.inCart ? styles.inCart : ''}
        `} >
        {props.inCart ? <>
          Додано <CheckOutlined className={styles.icon} />
        </> : <>
          В корзину <ShoppingOutlined className={styles.icon} />
        </> }

      </button>
  );
};

export default ToCartButton;
