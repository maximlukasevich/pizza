import {rAddToCart, rChangeCount, rDelete, rDeleteAll} from './reducer';

export const addToCart = (slug, name, image, size, pizzaPrice, count, price) => {
  const pizza = {
    slug,
    name,
    image,
    size,
    pizzaPrice,
    count,
    price
  }
  return (dispatch) => {
    dispatch(rAddToCart(pizza));
  }
}

export const changeCount = (slug, price, count, size) => {
  return (dispatch) => {
    dispatch(rChangeCount(slug, price, count, size));
  }
}

export const deleteFromCart = (slug, size) => {
  return (dispatch) => {
    dispatch(rDelete(slug, size));
  }
}

export const deleteAll = () => {
  return (dispatch) => {
    dispatch(rDeleteAll());
  }
}



