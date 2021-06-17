import React, {useState} from 'react';
import styles from './counter.module.css';
import Radio from '../common/Radio/Radio';
import Counter from "../Counter/Counter";

const PizzaCounter = (props) => {

  const [count, setCount] = useState(1);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const changeHandler = (count) => {
    setPrice(Number(count) * Number(pizzaPrice));
  }

  const formHandler = (e) => {
    setPizzaPrice(e.target.value);
    setPrice(count * e.target.value);
  }

  return (
    <div>
      <form className={styles.sizes} onChange={e => formHandler(e)}>
          <Radio name={'size'} label={60} value={60} active={true}/>
          <Radio name={'size'} label={90} value={90} />
          <Radio name={'size'} label={129} value={129} />
      </form>
      <div className={styles.counterWrapper}>
        <Counter
          count={count}
          setCount={setCount}
          pizzaPrice={pizzaPrice}
          onChange={changeHandler}/>

        <p className={styles.price}>{price} грн</p>
      </div>

    </div>
  );
};

export default PizzaCounter;
