import React from 'react';

import styles from './cart.module.css';
import { ShoppingOutlined } from '@ant-design/icons';

const Cart = () => {

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cart}>
        <div className={styles.cardAndIcon}>
          Корзина
          <ShoppingOutlined className={styles.icon}/>
        </div>

        <div className={styles.price}>
          529 грн
        </div>
      </div>
      <p className={styles.count} >Кількість товарів: 4</p>
    </div>

  );
};

export default Cart;
