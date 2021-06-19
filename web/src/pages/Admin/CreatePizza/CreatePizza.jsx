import React, {useState} from 'react';
import {Convert} from 'mongo-image-converter';
import {useDispatch} from 'react-redux';
import { createPizza } from '../../../store/Pizza/action';

import styles from './create-pizza.module.css';
import Input from '../../../components/common/Input/Input';
import {PlusOutlined} from '@ant-design/icons';
import TextArea from '../../../components/common/TextArea/TextArea';
import CheckBox from '../../../components/common/CheckBox/CheckBox';
import Button from '../../../components/common/Button/Button';


const CreatePizza = () => {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [inStock, setInStock] = useState(false);
  const [sizes, setSizes] = useState({sizes: []});

  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [sizeStock, setSizeStock] = useState(false);

  const dispatch = useDispatch();

  const convertImage = async (e) => {
    try {
      const convertedImage = await Convert(e.target.files[0]);
      if (convertedImage) {
        setImage(convertedImage);
      } else {
        alert('Вибраний файл не відповідає формату .png або .jpeg');
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  const addVariantToSizes = () => {
  setSizes({ sizes: [...sizes.sizes, { size, price, inStock: sizeStock }]});
  setSize('');
  setPrice('');
}

  return (

    <div className={styles.createPizza}>

      <div className={styles.form}>

        <h3>Додати піцу</h3>

        <Input type={'file'} label={'Картинка (.png / .jpeg) до 16 mb'} onLoad={convertImage} />
        <Input placeholder={'Назва'} label={'Назва'} value={name} setValue={setName}/>
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

        <CheckBox label={'Показувати на сайті?'} value={inStock} setValue={setInStock} />

        <Button title={'Додати'} onClick={e => dispatch(createPizza(
          image, name, ingredients,
          description, inStock, sizes.sizes
        ))} />

      </div>

      <div className={styles.sizeBlock}>
        <div className={styles.text}>
          <p>Варіації</p>
          <p className={styles.p}
             onClick={e => addVariantToSizes()}>Зберегти і додати новий варіант  <PlusOutlined /></p>
        </div>

        <div className={styles.sizesWrapper}>
          <div className={styles.sizes}>
            <Input
              placeholder={'Розмір'}
              value={size}
              setValue={setSize}/>
            :
            <Input
              placeholder={'Ціна'}
              value={price}
              setValue={setPrice} />
          </div>
          <CheckBox
            label={'В наявності?'}
            value={sizeStock}
            setValue={setSizeStock}
          />
        </div>

        <table className={styles.table} >
          <tr>
            <th className={styles.tableTitle}>Розмір</th>
            <th className={styles.tableTitle}>Ціна</th>
            <th className={styles.tableTitle}>В наявності</th>
          </tr>
        {sizes.sizes.map((item, i) =>
          <tr className={styles.tr}>
            <td>{item.size}</td>
            <td>{item.price}</td>
            <td>{item.inStock ? 'Так' : 'Ні'}</td>
          </tr>
        )}
        </table>

      </div>

    </div>

  );
};

export default CreatePizza;
