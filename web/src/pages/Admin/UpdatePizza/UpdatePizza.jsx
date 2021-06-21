import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getOnePizza} from '../../../store/Pizza/actions';

import styles from './update-pizza.module.css';
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import TextArea from "../../../components/common/TextArea/TextArea";


const UpdatePizza = ({pizza}) => {

  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnePizza(slug))
  }, [slug, dispatch]);

  const [onePizza, setOnePizza] = useState({...pizza});

  console.log('state: ', onePizza);
  console.log('props: ', pizza.name, pizza.ingredients, pizza.description, pizza.inStock, pizza.sizes);

  return (
    <div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  pizza: state.pizza.pizza
})

export default connect(mapStateToProps)(UpdatePizza);
