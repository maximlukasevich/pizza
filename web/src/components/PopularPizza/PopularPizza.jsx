import React from 'react';
import styles from './popular-pizza.module.css';
import PizzaCard from '../../pages/Pizza/components/PizzaCard/PizzaCard';

const PopularPizza = (props) => {
  return (
    <div className={props.className}>
      <h1 className={styles.title}>Найчастіше замовляють:</h1>
      <div className={styles.pizza}>
        <PizzaCard name={'Маргарита'}/>
        <PizzaCard name={'Капрічоза'}/>
        <PizzaCard name={'Вогняний Дракон'}/>
        <PizzaCard name={'Класична'}/>
      </div>
    </div>
  );
};

export default PopularPizza;
