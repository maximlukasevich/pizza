import React from 'react';
import {connect} from "react-redux";

import styles from './cart.module.css';
import Row from './components/Row/Row';
import OrderForm from './components/OrderForm/OrderForm';
import HR from '../../components/common/HR/HR';
import Logo from '../../components/Logo/Logo';
import {FrownOutlined} from '@ant-design/icons';


const Cart = ({cart}) => {

  const rowRender = cart.pizza.map((item, i) =>
    item.slug !== '' ?
      <Row
        slug={item.slug}
        name={item.name}
        image={item.image}
        size={item.size}
        pizzaPrice={item.pizzaPrice}
        count={item.count}
        price={item.price}
        key={i}
      /> : ' '
  );

  return (
    <div>

          {cart.totalPrice > 0 ?
            <>
            <table className={styles.table}>
              <tr>
                <th className={styles.tableTitle}>Піца</th>
                <th className={styles.tableTitle}>Ціна за шт.</th>
                <th className={styles.tableTitle}>Кількість</th>
                <th className={styles.tableTitle}>Вартість</th>
                <th className={styles.tableTitle}>Дії</th>
              </tr>
              {rowRender}
            </table>
            </> : <p className={styles.empty}>Товарів немає <FrownOutlined className={styles.icon} /></p>}



      <HR />
      <div className={styles.order}>
        <Logo />
        <div className={styles.orderForm}>
          <h3>Дані для доставки</h3>
          <OrderForm />
        </div>

        <div className={styles.accept}>
          <div className={styles.acceptHeader}>
            <h3>Інформація про замовлення</h3>
          </div>

          <div className={styles.acceptDiv}>
            <p className={styles.price}>
              Сума: <span className={styles.priceSpan}>{cart.totalPrice}</span> грн.
            </p>
            <button className={styles.button}>
              Замовити
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
