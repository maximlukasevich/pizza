import React from 'react';
import styles from './admin-pizza-row.module.css';
import Button from '../../../../../components/common/Button/Button';

const AdminPizzaRow = (props) => {
  return (
    <tr className={styles.tr}>
      <td>
        <img className={styles.img} src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg" alt=""/>
      </td>
      <td>
        Без назви..
      </td>
      <td>
        <ul>
          <li>Розмір: 60, Ціна: 120 грн., Показується на сайті: Так</li>
          <li>Розмір: 60, Ціна: 120 грн., Показується на сайті: Так</li>
          <li>Розмір: 60, Ціна: 120 грн., Показується на сайті: Так</li>
        </ul>
      </td>
      <td>
        13154123
      </td>
      <td className={styles.actions}>
        <Button title={'Видалити'} />
        <Button title={'Редагувати'} />
      </td>
    </tr>
  );
};

export default AdminPizzaRow;
