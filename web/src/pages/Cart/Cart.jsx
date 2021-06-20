import React from 'react';
import {connect, useDispatch} from "react-redux";
import {deleteAll} from '../../store/ShoppingCart/actions';

import styles from './cart.module.css';
import Row from './components/Row/Row';
import OrderForm from './components/OrderForm/OrderForm';
import HR from '../../components/common/HR/HR';
import Logo from '../../components/Logo/Logo';
import {FrownOutlined} from '@ant-design/icons';
import Button from "../../components/common/Button/Button";


const Cart = ({cart, customer}) => {

  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    if (cart.totalCount < 1 || cart.totalPrice < 1) {
      return alert('Корзина пуста');
    }
    if (customer.firstName === ''
      && customer.lastName === ''
      && customer.phone === ''
      && customer.address === '') {
      return alert('Заповніть всі дані для доставки');
    }
    dispatch(deleteAll());
    alert('Дякуємо за замовлення!')
  }

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
              <thead>
                <tr>
                  <th className={styles.tableTitle}>Піца</th>
                  <th className={styles.tableTitle}>Ціна за одиницю.</th>
                  <th className={styles.tableTitle}>Кількість</th>
                  <th className={styles.tableTitle}>Вартість</th>
                  <th className={styles.tableTitle}>Дії</th>
                </tr>
              </thead>
              <tbody>
                {rowRender}
              </tbody>
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
            <Button title={'Оформити замовлення'} onClick={buttonClickHandler}/>

          </div>

        </div>

      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  customer: state.customer
});

export default connect(mapStateToProps)(Cart);
