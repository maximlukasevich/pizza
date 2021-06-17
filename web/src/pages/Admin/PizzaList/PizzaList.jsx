import React from 'react';
import styles from './pizza-list.module.css';
import Header from "../../../components/Header/Header";
import Button from "../../../components/common/Button/Button";
import AdminPizzaRow from "./components/AdminPizzaRow/AdminPizzaRow";

const PizzaList = (props) => {
  return (
    <div className={styles.pizzaList}>
      <Header title={'Pizza List'} />

      <Button title={'Додати піцу'} />

      <table className={styles.table}>
        <tr>
          <th className={styles.tableTitle}>Картинка</th>
          <th className={styles.tableTitle}>Назва</th>
          <th className={styles.tableTitle}>Розмір : Ціна : Показується на сайті</th>
          <th className={styles.tableTitle}>Кількість продаж</th>
          <th className={styles.tableTitle}>Дії</th>
        </tr>

        <AdminPizzaRow />
        <AdminPizzaRow />
        <AdminPizzaRow />
        <AdminPizzaRow />

      </table>
    </div>
  );
};

export default PizzaList;
