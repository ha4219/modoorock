import {LOGIN, SIGNUP, SIGNUPERROR} from '../constants/actions';

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  isResettingPassword: false,
  isUpdating: true,
  error: {},
  success: {},
};

export default (state=initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isLoggedIn: true};
    case SIGNUP:
      return {...state, success: {}, error: {}};
    case SIGNUPERROR:
      return {...state, success: {}, error: action.type};
    default:
      return state;
  }
};
