import React from 'react';
import Header from '../../components/Header/Header';
import HR from '../../components/common/HR/HR';
import styles from './pizza-detail.module.css';
import ToCartButton from "../../components/common/ToCartButton/ToCartButton";
import PizzaCounter from "../../components/PizzaCounter/PizzaCounter";
import PizzaCard from "../Pizza/components/PizzaCard/PizzaCard";
import PopularPizza from "../../components/PopularPizza/PopularPizza";


const PizzaDetail = () => {
  return (
    <div>
      <Header title={'Маргарита'} />
      <div className={styles.content}>
        <img className={styles.image} src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg" alt=""/>

        <div className={styles.body}>
          <h2>Маргарита</h2>
          <HR />

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi consectetur consequatur deserunt dicta dolorem et eum facilis in ipsa ipsum itaque nostrum quibusdam quod ratione repellendus sint suscipit voluptate.
          </p>

          <h3>Інгредієнти</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Lorem.</li>
            <li className={styles.li}>Loadsa.</li>
            <li className={styles.li}>Labore.</li>
            <li className={styles.li}>Distinctio!</li>
            <li className={styles.li}>Distinctio!</li>
            <li className={styles.li}>Distinctio!</li>
            <li className={styles.li}>Distinctio!</li>
            <li className={styles.li}>Distinctio!</li>
          </ul>

          <div className={styles.orderBlock}>
            <PizzaCounter />
            <ToCartButton />
          </div>
        </div>
      </div>

      <HR />
      <PopularPizza className={styles.popular} />

    </div>
  );
};

export default PizzaDetail;
