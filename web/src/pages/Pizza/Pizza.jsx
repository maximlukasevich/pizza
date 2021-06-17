import React from 'react';
import styles from './pizza.module.css';
import PizzaCard from './components/PizzaCard/PizzaCard';
import Header from '../../components/Header/Header';
import HR from '../../components/common/HR/HR';
import PopularPizza from '../../components/PopularPizza/PopularPizza';

const Pizza = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.block}>
          <PopularPizza />
        </div>
        <div className={styles.block}>
          <h2 className={styles.title}>Вся піца</h2>
          <HR />
          <div className={styles.pizza}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Pizza;
