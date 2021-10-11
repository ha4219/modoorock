import {
  LOGIN,
  SIGNUP,
  SIGNUPERROR,
  LOGINSUCCESS,
  LOGINERROR,
  LOGOUT,
  FINDID,
} from '../constants/actions';

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  isResettingPassword: false,
  isUpdating: true,
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOGINSUCCESS:
      return {...state, isLoggedIn: true};
    case LOGIN:
      return {...state};
    case SIGNUP:
      return {...state, success: {}, error: {}};
    case SIGNUPERROR:
      return {...state, success: {}, error: action.type};
    case LOGINSUCCESS:
      return {...state, isLoggedIn: true};
    case LOGINERROR:
      return {...state, isLoggedIn: false};
    case LOGOUT:
      return {...state, isLoggedIn: false};
    case FINDID:
      return {...state};
    default:
      return initialState;
  }
};
