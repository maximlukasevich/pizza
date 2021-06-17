import React from 'react';
import styles from './order-form.module.css';
import Input from '../../../../components/common/Input/Input';

const OrderForm = () => {
  return (
    <div className={styles.orderForm}>
      <Input value={''} label={'Ім\'я'} placeholder={'Ім\'я'}/>
      <Input value={''} label={'Фамілія'} placeholder={'Фамілія'}/>
      <Input value={''} label={'Телефон'} placeholder={'Телефон'} />
      <Input value={''} label={'Адреса доставки'} placeholder={'Адреса доставки'}/>
    </div>
  );
};

export default OrderForm;
