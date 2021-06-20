import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getOnePizza} from '../../../store/Pizza/actions';

import styles from './update-pizza.module.css';
import Input from '../../../components/common/Input/Input';
import TextArea from '../../../components/common/TextArea/TextArea';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Button from '../../../components/common/Button/Button';


const UpdatePizza = ({pizza}) => {

  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePizza(slug));
  }, [dispatch, slug]);

  const sizesMap = pizza.sizes !== undefined ? pizza.sizes.map((item, i) =>
    <div className={styles.sizesWrapper}>
      <div className={styles.sizes}>
        <Input
          placeholder={'Розмір'}
          value={item.size}
           />
        :
        <Input
          placeholder={'Ціна'}
          value={item.price}
           />
      </div>
      <CheckBox
        label={'В наявності?'}
        checked={item.inStock}
         />
    </div>
  ) : '';


  return (

    <div className={styles.updatePizza}>

      <div className={styles.form}>

        <h3>Редагувати піцу</h3>
        
        <Input type={'file'} label={'Картинка (.png / .jpeg) до 16 mb'} />
        <Input
          placeholder={'Назва'}
          label={'Назва'}
          value={pizza.name}
          setValue={pizza.name} />

        <TextArea
          placeholder={'Інгредієнти (через кому)'}
          label={'Інгредієнти'}
          value={pizza.ingredients}
          setValue={pizza.ingredients} />

        <TextArea
          placeholder={'Опис'}
          label={'Опис'}
          value={pizza.description}
          setValue={pizza.description} />

        <CheckBox
          label={'Показувати на сайті?'}
          checked={pizza.inStock}
          onChange={pizza.inStock} />

        <Button className={styles.button} title={'Зберегти'}/>

      </div>

      <div>

        <div className={styles.sizeBlock}>
          <div className={styles.text}>
            <p>Варіації</p>
          </div>

          {sizesMap}

        </div>

      </div>

      <img className={styles.img} src={pizza.image} alt={pizza.name}/>

    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.pizza
})

export default connect(mapStateToProps)(UpdatePizza);
