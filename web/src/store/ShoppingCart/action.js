import { rAddToCart, rChangeCount, rDelete } from './reducer';

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

export const changeCount = (slug, price, count) => {
  return (dispatch) => {
    dispatch(rChangeCount(slug, price, count));
  }
}

export const deleteFromCart = (slug) => {
  return (dispatch) => {
    dispatch(rDelete(slug));
  }
}

