import {
  LOGIN,
  SIGNUP,
  SIGNUPERROR,
  LOGINSUCCESS,
  LOGINERROR,
  LOGOUT,
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
    case LOGIN:
      return {...state, isLoggedIn: true};
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
    default:
      return initialState;
  }
};
