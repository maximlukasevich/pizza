import React, {useEffect, useState} from 'react';
import styles from './create-pizza.module.css';
import Input from '../../../components/common/Input/Input';
import {PlusOutlined} from '@ant-design/icons';
import {wait} from "@testing-library/react";
import TextArea from "../../../components/common/TextArea/TextArea";
import Radio from "../../../components/common/Radio/Radio";
import CheckBox from "../../../components/common/CheckBox/CheckBox";
import Button from "../../../components/common/Button/Button";

const CreatePizza = () => {

  const [clickCount, setClickCount] = useState(0);


  const addFieldsHandler = () => {
    setClickCount(Number(clickCount) + 1);
  }

  const renderKeyValue = () => {
    let divs = [];
    for (let i = 0; i < clickCount; i++) {
      divs.push(
        <div className={styles.sizesWrapper}>
          <div className={styles.sizes}>
            <Input placeholder={'Розмір'} />
            :
            <Input placeholder={'Ціна'}/>
          </div>
        <CheckBox label={'В наявності?'} />
        </div>
      );
    }
    return divs;
  }

  return (

    <div className={styles.createPizza}>

      <div className={styles.form}>

        <h3>Додати піцу</h3>

        <Input type={'file'} label={'Картинка (.png / .jpeg) до 16 mb'} />
        <Input placeholder={'Назва'} label={'Назва'} />
        <TextArea placeholder={'Інгредієнти (через кому)'} label={'Інгредієнти'} />
        <TextArea placeholder={'Опис'} label={'Опис'} />

        <CheckBox label={'Показувати на сайті?'} />

        <Button title={'Додати'}/>

      </div>

      <div className={styles.sizeBlock}>
        <div className={styles.text}>
          <p>Варіації</p>
          <p className={styles.p}
             onClick={e => addFieldsHandler()}>Додати варіант  <PlusOutlined /></p>
        </div>

        <div className={styles.sizesWrapper}>
          <div className={styles.sizes}>
            <Input placeholder={'Розмір'} />
            :
            <Input placeholder={'Ціна'}/>
          </div>
          <CheckBox label={'В наявності?'} />
        </div>

        {renderKeyValue()}

      </div>

    </div>

  );
};

export default CreatePizza;
