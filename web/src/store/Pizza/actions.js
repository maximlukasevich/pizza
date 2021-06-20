import { URL } from '../../utils/axios';
import axios from 'axios';
import {rSetAllPizza, rSetOnePizza} from "./reducer";

export const createPizza = (image, name, ingredients, description, inStock, sizes) => {
  axios.post(URL+'api/pizza', {
    pizza: {
      image,
      name,
      ingredients,
      description,
      sizes,
      inStock
    }
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => {
      alert(res.data.message);
    })
    .catch(error => console.error(error));
}

export const deletePizza = (slug) => {
  return (dispatch) => {
    axios.delete(URL+`api/pizza/${slug}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        alert(res.data.message);
        dispatch(getAllPizza());
      })
      .catch(error => console.error(error));
  }
}

export const getAllPizza = () => {
  return (dispatch) => {
    axios.get(URL+'api/pizza')
      .then(res => {
        res.data.message ? alert(res.data.message) : dispatch(rSetAllPizza(res.data));
      })
      .catch(error => console.log(error));
  }
}

export const getOnePizza = (slug) => {
  return (dispatch) => {
    axios.get(URL+`api/pizza/${slug}`)
      .then(res => {
        res.data.message ? alert(res.data.message) : dispatch(rSetOnePizza(res.data));
      })
      .catch(error => console.log(error));
  }
}