import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header/Header';
import HR from '../../components/common/HR/HR';
import styles from './pizza-detail.module.css';
import PizzaCounter from "../../components/PizzaCounter/PizzaCounter";
import {connect, useDispatch} from "react-redux";
import {getOnePizza} from "../../store/Pizza/actions";
import PopularPizza from "../../components/PopularPizza/PopularPizza";


const PizzaDetail = ({pizza}) => {

  const {slug} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePizza(slug));
  }, [dispatch, slug]);

  const ingredientsMap = pizza.ingredients !== undefined ? pizza.ingredients.map((item, i) =>
    <li key={i} className={styles.li}>{item}</li>
  ) : '';

  return (
    <div>
      {pizza.sizes !== undefined ? <>
        <Header title={pizza.name}/>
        <div className={styles.content}>
          <img className={styles.image} src={pizza.image} alt={pizza.name}/>

          <div className={styles.body}>
            <h2>{pizza.name}</h2>
            <HR/>
            <h3>Опис</h3>
            <p className={styles.description}>
              {pizza.description}
            </p>

            <h3>Інгредієнти</h3>
            <ul className={styles.ul}>
              {ingredientsMap}
            </ul>

            <div className={styles.orderBlock}>
              <PizzaCounter
                sizes={pizza.sizes}
                name={pizza.name}
                slug={pizza.slug}
                image={pizza.image}/>
            </div>
          </div>
        </div>
        <PopularPizza/>
      </> : <p>Loading...</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.pizza
});

export default connect(mapStateToProps)(PizzaDetail);
