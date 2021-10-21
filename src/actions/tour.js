import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
} from '../constants/actions';

import APIHelper from '../helpers/APIHelper';

export const getTourData =
  ({tourType}) =>
  async dispatch => {
    try {
      dispatch({type: GETTOURDATA});

      dispatch({type: GETTOURDATASUCCESS, payload: tourType});
    } catch (e) {
      console.log(e);
      dispatch({type: GETTOURDATAERROR});
    }
  };