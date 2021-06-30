import React from 'react';
import styles from './pizza-card.module.css';
import PizzaCounter from '../PizzaCounter/PizzaCounter';
import {NavLink} from 'react-router-dom';

const PizzaCard = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <NavLink to={`/pizza/${props.slug}`}>
          <img className={styles.image} src={props.image} alt={props.name} />
          <h1 className={styles.title}>{props.name || 'Без назви...'}</h1>
        </NavLink>
      </div>
      <div className={styles.body}>
        <PizzaCounter
          sizes={props.sizes}
          name={props.name}
          slug={props.slug}
          image={props.image} />
      </div>
    </div>
  );
};

export default PizzaCard;
