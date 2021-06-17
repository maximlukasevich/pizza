import React, {useState} from 'react';
import styles from './row.module.css';
import Counter from "../../../../components/Counter/Counter";
import {DeleteOutlined} from "@ant-design/icons";

const Row = (props) => {

  const [count, setCount] = useState(1);
  const [pizzaPrice, setPizzaPrice] = useState(60);
  const [price, setPrice] = useState(60);

  const changeHandler = (count) => {
    setPrice(Number(count) * Number(pizzaPrice));
  }

  return (
    <tr className={styles.tr}>
      <td className={styles.pizza}>
        <img className={styles.image} src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg" alt=""/>
        <div className={styles.pizzaName}>
          <p>Маргарита</p>
          <p>Діаметр: 60</p>
        </div>
      </td>
      <td>
        60 грн
      </td>
      <td>
        <Counter
          className={styles.counter}
          count={count}
          setCount={setCount}
          pizzaPrice={pizzaPrice}
          onChange={changeHandler}
        />
      </td>
      <td>
        {price} грн
      </td>
      <td className={styles.tdIcon}>
        <DeleteOutlined className={styles.icon} />
      </td>
    </tr>
  );
};

export default Row;
