import axios from 'axios';
import { URL } from '../../utils/axios';
import {auth as rAuth, logOut as rLogOut} from "./reducer";

export const logIn = (login, password) => {
    return (dispatch) => {
      axios.post(URL+'api/auth/login', {
        login,
        password
      })
        .then(res => {
          if (res.data.message) {
            alert(res.data.message);
          } else {
            dispatch(rAuth(res.data.admin));
            localStorage.setItem('token', res.data.token);
          }
        })
        .catch(error => console.log(error));
    }
}

export const auth = () => {
  return (dispatch) => {
    axios.get(URL+'api/auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          dispatch(rAuth(res.data.admin));
          localStorage.setItem('token', res.data.token);
        }
      })
      .catch(error => {
        localStorage.removeItem('token');
      });
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch(rLogOut());
    localStorage.removeItem('token');
  }
}

