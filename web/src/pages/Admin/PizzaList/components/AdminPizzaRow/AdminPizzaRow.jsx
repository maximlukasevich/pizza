import React from 'react';
import styles from './admin-pizza-row.module.css';
import Button from '../../../../../components/common/Button/Button';
import {useDispatch} from "react-redux";
import {deletePizza} from "../../../../../store/Pizza/action";

const AdminPizzaRow = (props) => {

  const dispatch = useDispatch();

  return (
    <tr className={styles.tr}>
      <td>
        <img className={styles.img} src={props.image} alt={props.name}/>
      </td>
      <td>
        {props.name}
      </td>
      <td>
        <ul>
          {props.sizes.map((item, i) =>
            <li>Розмір: {item.size}, Ціна: {item.price} грн., Показується на сайті: {item.inStock ? 'Так' : 'Ні'}</li>
          )}
        </ul>
      </td>
      <td>
        -
      </td>
      <td className={styles.actions}>
        <Button onClick={e => dispatch(deletePizza(props.slug))} title={'Видалити'}/>
        <Button title={'Редагувати'} />
      </td>
    </tr>
  );
};

export default AdminPizzaRow;
