import React from 'react';
import styles from './admin-pizza-row.module.css';
import Button from '../../../../../components/common/Button/Button';
import {useDispatch} from 'react-redux';
import {deletePizza} from '../../../../../store/Pizza/actions';
import {NavLink, Redirect} from 'react-router-dom';

const AdminPizzaRow = (props) => {

  const dispatch = useDispatch();

  const sizesRender = props.sizes.map((item, i) =>
    <tr className={styles.sizes}>
      <td>{item.size}</td>
      <td>{item.price}</td>
      <td>{item.inStock ? 'Так' : 'Ні'}</td>
    </tr> )

  return (
    <tr className={styles.tr}>
      <td>
        <img className={styles.img} src={props.image} alt={props.name}/>
      </td>
      <td>
        {props.name}
      </td>
      <td>
        <table className={styles.sizesTable}>
          <tr className={styles.sizes}>
            <th>Розмір</th>
            <th>Ціна</th>
            <th>В продажі</th>
          </tr>
          {sizesRender}
        </table>
      </td>
      <td>
        -
      </td>
      <td>
        {props.inStock ? 'Так' : 'Ні'}
      </td>
      <td className={styles.actions}>
        <Button onClick={() => dispatch(deletePizza(props.slug))} title={'Видалити'}/>
        <NavLink to={`/admin/pizza/${props.slug}/update`} className={styles.button}>
          Редагувати
        </NavLink>
      </td>
    </tr>
  );
};

export default AdminPizzaRow;
