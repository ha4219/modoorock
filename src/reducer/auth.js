import {LOGIN} from '../constants/actions';

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
    default:
      return state;
  }
};
