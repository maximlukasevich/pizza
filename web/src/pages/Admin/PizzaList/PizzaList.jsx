import React, {useEffect} from 'react';
import styles from './pizza-list.module.css';
import Header from "../../../components/Header/Header";
import Button from "../../../components/common/Button/Button";
import AdminPizzaRow from "./components/AdminPizzaRow/AdminPizzaRow";
import {connect, useDispatch} from "react-redux";
import {getAllPizza} from "../../../store/Pizza/action";
import {NavLink} from "react-router-dom";

const PizzaList = ({pizza}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, [])

  return (
    <div className={styles.pizzaList}>
      <Header title={'Pizza List'} />

      <NavLink to={'/admin/pizza/create'}><Button title={'Додати піцу'} onClick={e => e}/></NavLink>

      <table className={styles.table}>
        <tr>
          <th className={styles.tableTitle}>Картинка</th>
          <th className={styles.tableTitle}>Назва</th>
          <th className={styles.tableTitle}>Розмір : Ціна : Показується на сайті</th>
          <th className={styles.tableTitle}>Кількість продаж</th>
          <th className={styles.tableTitle}>Дії</th>
        </tr>

        {pizza.map((item, i) =>
          <AdminPizzaRow
            image={item.image}
            name={item.name}
            sizes={item.sizes}
            slug={item.slug}
            />
        )}

      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.allPizza
});

export default connect(mapStateToProps)(PizzaList);
