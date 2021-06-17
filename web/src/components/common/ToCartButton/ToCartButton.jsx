import React from 'react';
import styles from './button.module.css';
import {ShoppingOutlined} from "@ant-design/icons";

const ToCartButton = (props) => {
  return (
      <button className={styles.button}>
        В корзину <ShoppingOutlined className={styles.icon} />
      </button>
  );
};

export default ToCartButton;
