const ADD_TO_CART = 'ADD_TO_CART';
const CHANGE_COUNT = 'CHANGE_COUNT';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const initialState = {
  pizza: [{
      slug: '',
      name: '',
      image: '',
      size: '',
      pizzaPrice: 0,
      count: 0,
      price: 0,
  }],
  totalPrice: 0,
  totalCount: 0
}

export const shoppingCartReducer = (state = initialState, action) => {

  let index;

  switch (action.type) {

    case ADD_TO_CART:

      index = state.pizza.findIndex((item, i) =>
        item.slug === action.pizza.slug && item.size === action.pizza.size);

      if (index === -1) {
        return {
          ...state,
          pizza: [...state.pizza, action.pizza],
          totalPrice: Number(state.totalPrice) + Number(action.pizza.price),
          totalCount: Number(state.totalCount) + Number(action.pizza.count),
        }
      }

      let pizza = state.pizza;
      pizza[index].count += action.pizza.count;
      pizza[index].price += action.pizza.price;

      return {
        ...state,
        pizza: pizza,
        totalPrice: Number(state.totalPrice) + Number(action.pizza.price),
        totalCount: Number(state.totalCount) + Number(action.pizza.count)
      }

    case CHANGE_COUNT:

      index = state.pizza.findIndex((item, i) => item.slug === action.slug);

      if (index === -1 || action.price < 0 || action.count < 1) {
        return {
          ...state,
          pizza: state.pizza,
          totalPrice: state.totalPrice,
          totalCount: state.totalCount
        }
      }

      state.totalCount -= Number(state.pizza[index].count);
      state.totalPrice -= Number(state.pizza[index].price);

      state.pizza[index].price = Number(action.price);
      state.pizza[index].count = Number(action.count);

      return {
        ...state,
        pizza: state.pizza,
        totalPrice: Number(state.totalPrice) + Number(action.price),
        totalCount: Number(state.totalCount) + Number(action.count),
      }

    case DELETE_FROM_CART:

      let deletedPizza = state.pizza.find(item => item.slug === action.slug);

      return {
        ...state,
        pizza: [...state.pizza.filter(item => item.slug !== action.slug)],
        totalPrice: Number(state.totalPrice) - Number(deletedPizza.price),
        totalCount: Number(state.totalCount) - Number(deletedPizza.count)
      }

    default:
      return state;
  }
}

export const rAddToCart = (pizza) => ({
  type: ADD_TO_CART,
  pizza
});

export const rChangeCount = (slug, price, count) => ({
  type: CHANGE_COUNT,
  slug,
  price,
  count
});

export const rDelete = (slug) => ({
  type: DELETE_FROM_CART,
  slug
})


