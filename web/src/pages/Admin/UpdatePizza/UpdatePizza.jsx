import React from 'react';
import styles from './update-pizza.module.css';
import Input from '../../../components/common/Input/Input';
import TextArea from '../../../components/common/TextArea/TextArea';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Button from '../../../components/common/Button/Button';

const UpdatePizza = () => {
  return (
    <div className={styles.updatePizza}>

      <div className={styles.form}>

        <h3>Редагувати піцу</h3>
        
        <Input type={'file'} label={'Картинка (.png / .jpeg) до 16 mb'} />
        <Input placeholder={'Назва'} label={'Назва'} />
        <TextArea placeholder={'Інгредієнти (через кому)'} label={'Інгредієнти'} />
        <TextArea placeholder={'Опис'} label={'Опис'} />

        <CheckBox label={'Показувати на сайті?'} />

        <Button title={'Зберегти'}/>

      </div>

      <div>

        <div className={styles.sizeBlock}>
          <div className={styles.text}>
            <p>Варіації</p>
          </div>

          <div className={styles.sizesWrapper}>
            <div className={styles.sizes}>
              <Input placeholder={'Розмір'} />
              :
              <Input placeholder={'Ціна'}/>
            </div>
            <CheckBox label={'В наявності?'} />
          </div>

        </div>

      </div>

      <img className={styles.img} src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/test1-800x800.jpg" alt=""/>

    </div>
  );
};

export default UpdatePizza;
