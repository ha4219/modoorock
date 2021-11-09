import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
  GETEXPDATA,
  GETEXPDATASUCCESS,
  GETEXPDATAERROR,
} from '../constants/actions';

export const initialState = {
  exp: [],
  isUpdating: true,
  header: '',
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTOURDATA:
      return {...state};
    case GETTOURDATASUCCESS:
      return {...state};
    case GETTOURDATAERROR:
      return {...state};
    case GETEXPDATASUCCESS:
      return {...state, exp: action.payload};
    default:
      return state;
  }
};
