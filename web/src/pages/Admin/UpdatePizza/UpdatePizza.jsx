import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getOnePizza} from '../../../store/Pizza/actions';

import styles from './update-pizza.module.css';
import Input from '../../../components/common/Input/Input';
import TextArea from '../../../components/common/TextArea/TextArea';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Button from '../../../components/common/Button/Button';


const UpdatePizza = ({pizza}) => {

  const [name, setName] = useState(pizza.name);
  const [ingredients, setIngredients] = useState(pizza.ingredients);
  const [description, setDescription] = useState(pizza.description);
  const [inStock, setInStock] = useState(pizza.inStock);
  const [sizes, setSizes] = useState({sizes: pizza.sizes});

  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePizza(slug));
  }, []);

  const sizesMap = sizes.sizes !== undefined ? sizes.sizes.map((item, i) =>
    <div className={styles.sizesWrapper}>
      <div className={styles.sizes}>
        <Input
          placeholder={'Розмір'}
          value={item.size}
          setValue={setSizes} />
        :
        <Input
          placeholder={'Ціна'}
          value={item.price}
          setValue={setSizes} />
      </div>
      <CheckBox
        label={'В наявності?'}
        checked={item.inStock}
        setValue={setSizes} />
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
          value={name}
          setValue={setName} />

        <TextArea
          placeholder={'Інгредієнти (через кому)'}
          label={'Інгредієнти'}
          value={ingredients}
          setValue={setIngredients} />

        <TextArea
          placeholder={'Опис'}
          label={'Опис'}
          value={description}
          setValue={setDescription} />

        <CheckBox
          label={'Показувати на сайті?'}
          checked={inStock}
          onChange={setInStock} />

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

      <img className={styles.img} src={pizza.image} alt={name}/>

    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.pizza
})

export default connect(mapStateToProps)(UpdatePizza);
