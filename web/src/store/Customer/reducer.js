const SET_CUSTOMER = 'SET_CUSTOMER';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
}

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CUSTOMER:
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        phone: action.phone,
        address: action.address
      }
    default:
      return state;
  }
}

export const rSetCustomer = (firstName, lastName, phone, address) => ({
  type: SET_CUSTOMER,
  firstName,
  lastName,
  phone,
  address
});
