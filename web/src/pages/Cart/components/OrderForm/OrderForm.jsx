import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {setCustomer} from '../../../../store/Customer/actions';
import styles from './order-form.module.css';
import Input from '../../../../components/common/Input/Input';
import TextArea from "../../../../components/common/TextArea/TextArea";

const OrderForm = ({customer}) => {

  const [firstName, setFirstName] = useState(customer.firstName || '');
  const [lastName, setLastName]= useState(customer.lastName || '');
  const [phone, setPhone]= useState(customer.phone || '');
  const [address, setAddress]= useState(customer.address || '');
  const [description, setDescription]= useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCustomer(firstName, lastName, phone, address));
  }, [dispatch, firstName, lastName, phone, address]);

  return (
    <div className={styles.orderForm}>
      <Input
        value={firstName}
        setValue={setFirstName}
        label={'Ім\'я'}
        placeholder={'Ім\'я'}
        require />
      <Input
        value={lastName}
        setValue={setLastName}
        label={'Фамілія'}
        placeholder={'Фамілія'}

        require />
      <Input
        value={phone}
        setValue={setPhone}
        label={'Телефон'}
        placeholder={'Телефон'}
        require />
      <Input
        value={address}
        setValue={setAddress}
        label={'Адреса доставки'}
        placeholder={'Адреса доставки'}
        require />
      <TextArea
        value={description}
        setValue={setDescription}
        label={'Примітки до замовлення'}
        placeholder={'Примітки до замовлення'}
        require />
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer
});

export default connect(mapStateToProps)(OrderForm);
