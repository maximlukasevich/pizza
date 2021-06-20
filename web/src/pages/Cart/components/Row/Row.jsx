import React, {useState} from 'react';
import styles from './row.module.css';
import Counter from "../../../../components/Counter/Counter";
import {DeleteOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {changeCount, deleteFromCart} from "../../../../store/ShoppingCart/actions";

const Row = (props) => {

  const [count, setCount] = useState(Number(props.count) || 1);

  const dispatch = useDispatch();

  const changeHandler = (count) => {
    const price = Number(count) * Number(props.pizzaPrice);
    dispatch(changeCount(props.slug, price, count));
  }

  return (

    <tr className={styles.tr}>
      <td className={styles.pizza}>
        <img className={styles.image} src={props.image} alt={props.name} />
        <div className={styles.pizzaName}>
          <p>{props.name}</p>
          <p>Діаметр: {props.size}</p>
        </div>
      </td>
      <td>
        {props.pizzaPrice} грн.
      </td>
      <td>
        <Counter
          className={styles.counter}
          count={count}
          setCount={setCount}
          pizzaPrice={Number(props.pizzaPrice)}
          onChange={changeHandler} />
      </td>
      <td>
        {props.price} грн.
      </td>
      <td className={styles.tdIcon} onClick={() => dispatch(deleteFromCart(props.slug))}>
        <DeleteOutlined className={styles.icon} />
      </td>
    </tr>
  );
};

export default Row;
