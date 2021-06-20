import { rSetCustomer } from './reducer';

export const setCustomer = (firstName, lastName, phone, address) => {
  return (dispatch) => {
    dispatch(rSetCustomer(firstName, lastName, phone, address));
  }
}