import {
  LOGIN,
  SIGNUP,
  SIGNUPERROR,
  LOGINSUCCESS,
  LOGINERROR,
  LOGOUT,
  FINDID,
  NOTICELIST,
  GETSESSION,
  GETSESSIONSUCCESS,
  GETSESSIONERROR,
} from '../constants/actions';

export const initialState = {
  user: {
    idx: -1,
    name: '',
  },
  isLoggedIn: false,
  isLoggingIn: false,
  isResettingPassword: false,
  isUpdating: true,
  header: '',
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  console.log('auth test', state, action);
  console.log('action', action);
  switch (action.type) {
    case LOGINSUCCESS:
      return {...state, isLoggedIn: true, header: action.payload};
    case LOGIN:
      return {...state};
    case SIGNUP:
      return {...state, success: {}, error: {}};
    case SIGNUPERROR:
      return {...state, success: {}, error: {}};
    case LOGINSUCCESS:
      return {...state, isLoggedIn: true};
    case LOGINERROR:
      return {...state, isLoggedIn: false};
    case LOGOUT:
      return {...state, isLoggedIn: false};
    case FINDID:
      return {...state};
    case NOTICELIST:
      return {...state};
    case GETSESSION:
      return {...state};
    case GETSESSIONSUCCESS:
      return {
        ...state,
        user: {idx: action.payload.idx, name: action.payload.name},
      };
    case GETSESSIONERROR:
      return {...state};
    default:
      return state;
  }
};
