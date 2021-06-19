const AUTH = 'AUTH';
const LOG_OUT = 'LOG_OUT'

const initialState = {
  admin: {},
  isAuth: false
}

export const currentAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        admin: action.admin,
        isAuth: true
      }

    case LOG_OUT:
      return {
        admin: {},
        isAuth: false
      }

    default:
      return state;
  }
}

export const auth = (admin) => ({
  type: AUTH,
  admin
});

export const logOut = () => ({
  type: LOG_OUT
})





