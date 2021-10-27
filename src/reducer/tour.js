import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
} from '../constants/actions';

export const initialState = {
  data: {},
  isUpdating: true,
  header: '',
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  console.log('tour', state, action);
  switch (action.type) {
    case GETTOURDATA:
      return {...state};
    case GETTOURDATASUCCESS:
      return {...state};
    case GETTOURDATAERROR:
      return {...state};
    default:
      return state;
  }
};
