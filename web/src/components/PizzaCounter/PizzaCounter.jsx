import React, {useState} from 'react';

import styles from './counter.module.css';
import Radio from '../common/Radio/Radio';
import Counter from "../Counter/Counter";
import ToCartButton from "../common/ToCartButton/ToCartButton";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/ShoppingCart/action";

const PizzaCounter = (props) => {

  const [count, setCount] = useState(1);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();
  const addToCartAction  = () => {
    if (price > 0) {
      setTimeout(() => {
        setInCart(false);
      }, 2000);
      setInCart(true);
      dispatch(addToCart(props.slug, props.name, props.image, size, pizzaPrice, count, price));
    } else {
      alert('Оберіть розмір піци');
    }
  }

  const changeHandler = (count) => {
    setPrice(Number(count) * Number(pizzaPrice));
  }

  const formHandler = (e) => {
    setPizzaPrice(e.target.value);
    setPrice(count * e.target.value);
  }

  // Оскільки декілька перших пропсів = undefined - додано перевірку
  const sizesRadio = props.sizes !== undefined ? props.sizes.map((item, i) =>
    <Radio
      name={'size'}
      label={item.size}
      value={item.price}
      setSize={setSize}
      key={i}/>) : '' ;

  return (
    <div>
      <form className={styles.sizes} onChange={e => formHandler(e)}>
        {sizesRadio}
      </form>
      <div className={styles.counterWrapper}>
        <Counter
          count={count}
          setCount={setCount}
          pizzaPrice={pizzaPrice}
          onChange={changeHandler}/>

        <p className={styles.price}>{price} грн</p>
      </div>
      <div onClick={addToCartAction}>
        <ToCartButton inCart={inCart} />
      </div>

    </div>
  );
};

export default PizzaCounter;
