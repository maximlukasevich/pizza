import React, {useState} from 'react';
import styles from './cart.module.css';
import Row from './components/Row/Row';
import OrderForm from './components/OrderForm/OrderForm';
import HR from "../../components/common/HR/HR";
import Logo from "../../components/Logo/Logo";

const Cart = () => {

  const [fullPrice, setFullPrice] = useState(60);

  return (
    <div>
        <table className={styles.table}>
          <tr >
            <th className={styles.tableTitle}>Піца</th>
            <th className={styles.tableTitle}>Ціна за шт.</th>
            <th className={styles.tableTitle}>Кількість</th>
            <th className={styles.tableTitle}>Вартість</th>
            <th className={styles.tableTitle}>Дії</th>
          </tr>

          <Row />

        </table>

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
              Сума: <span className={styles.priceSpan}>{fullPrice}</span> грн.
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

export default Cart;
