const SET_ONE = 'SET_ONE';
const SET_ALL = 'SET_ALL';

const initialState = {
  allPizza: [],
  pizza: {}
}

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONE:
      return {
        ...state,
        pizza: action.pizza
      }
    case SET_ALL:
      return {
        ...state,
        allPizza: action.pizza
      }
    default:
      return state
  }
}

export const rSetOnePizza = (pizza) => ({
  type: SET_ONE,
  pizza
})

export const rSetAllPizza = (pizza) => ({
  type: SET_ALL,
  pizza
})
