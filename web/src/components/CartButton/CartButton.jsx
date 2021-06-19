import React from 'react';

import styles from './cart-button.module.css';
import { ShoppingOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";

const CartButton = () => {

  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalCount = useSelector(state => state.cart.totalCount);

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cart}>
        <div className={styles.cardAndIcon}>
          Корзина
          <ShoppingOutlined className={styles.icon}/>
        </div>

        <div className={styles.price}>
          {totalPrice} грн.
        </div>
      </div>
      <p className={styles.count} >Кількість товарів: {totalCount}</p>
    </div>

  );
};

export default CartButton;
