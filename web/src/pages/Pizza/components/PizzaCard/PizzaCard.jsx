import React from 'react';
import styles from './pizza-card.module.css';
import ToCartButton from '../../../../components/common/ToCartButton/ToCartButton';
import PizzaCounter from '../../../../components/PizzaCounter/PizzaCounter';

const PizzaCard = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.image} src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg" alt=""/>
        <h1 className={styles.title}>{props.name || 'Без назви...'}</h1>
      </div>
      <div className={styles.body}>
        <PizzaCounter />
      </div>
      <div className={styles.footer}>
        <ToCartButton />
      </div>
    </div>
  );
};

export default PizzaCard;
