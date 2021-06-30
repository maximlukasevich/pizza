import React, {useEffect} from 'react';
import styles from './popular-pizza.module.css';
import PizzaCard from '../PizzaCard/PizzaCard';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPizza} from '../../store/Pizza/actions';

const PopularPizza = (props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch]);

  const pizza = useSelector(state => state.pizza.allPizza
    .filter((item) => item.inStock)
    .sort((a, b) => -1 * (a.orderedTimes - b.orderedTimes))
    .slice(0, 4)
  );

  const pizzaCartRender = pizza.map((item, i) =>
    item.inStock ?
      <PizzaCard
        image={item.image}
        name={item.name}
        slug={item.slug}
        sizes={item.sizes}
        key={i}
      /> : '');


  return (
    <div className={props.className}>
      <h1 className={styles.title}>Найчастіше замовляють:</h1>
      <div className={styles.pizza}>
        {pizzaCartRender}
      </div>
    </div>
  );
};

export default PopularPizza;
