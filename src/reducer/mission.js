import {
  UPLOADIMAGE,
  UPLOADIMAGESUCCESS,
  UPLOADIMAGEERROR
} from '../constants/actions';

export const initialState = {
  mission: {
    hi: 'hihi',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOADIMAGE:
      return state;
    default:
      return state;
  }
};
