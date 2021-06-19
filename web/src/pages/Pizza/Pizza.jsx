import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {getAllPizza} from "../../store/Pizza/action";

import styles from './pizza.module.css';
import PizzaCard from './components/PizzaCard/PizzaCard';
import Header from '../../components/Header/Header';
import HR from '../../components/common/HR/HR';
import PopularPizza from '../../components/PopularPizza/PopularPizza';

const Pizza = ({pizza}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  const renderPizza = pizza.map((item, i) =>
      <PizzaCard
        image={item.image}
        name={item.name}
        slug={item.slug}
        sizes={item.sizes}
        key={i}
      />
    )

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
            {renderPizza}
          </div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.allPizza
});

export default connect(mapStateToProps)(Pizza);
