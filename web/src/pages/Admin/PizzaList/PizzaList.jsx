import React, {useEffect} from 'react';
import styles from './pizza-list.module.css';
import Header from "../../../components/Header/Header";
import Button from "../../../components/common/Button/Button";
import AdminPizzaRow from "./components/AdminPizzaRow/AdminPizzaRow";
import {connect, useDispatch} from "react-redux";
import {getAllPizza} from "../../../store/Pizza/actions";
import {NavLink} from "react-router-dom";

const PizzaList = ({pizza}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch])

  const pizzaMap = pizza.map((item, i) =>
    <AdminPizzaRow
      image={item.image}
      name={item.name}
      sizes={item.sizes}
      slug={item.slug}
      orderedTimes={item.orderedTimes}
      inStock={item.inStock}
      key={i} />
  )

  return (
    <div className={styles.pizzaList}>
      <Header title={'Pizza List'} />

      <NavLink to={'/admin/pizza/create'}><Button title={'Додати піцу'} onClick={e => e}/></NavLink>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableTitle}>Картинка</th>
            <th className={styles.tableTitle}>Назва</th>
            <th className={styles.tableTitle}>Варіанти</th>
            <th className={styles.tableTitle}>Кількість продаж</th>
            <th className={styles.tableTitle}>В продажі</th>
            <th className={styles.tableTitle}>Дії</th>
          </tr>
        </thead>
        <tbody>
          {pizzaMap}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.allPizza
});

export default connect(mapStateToProps)(PizzaList);
