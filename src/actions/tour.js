import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
} from '../constants/actions';

import APIHelper from '../helpers/APIHelper';

export const getTourData =
  ({tourType}) =>
  async dispatch => {
    console.log('apiTTTTEst',tourType);
    try {
      dispatch({type: GETTOURDATA});
      const res = await APIHelper.post('/attraction/getattractionlist', {
        area: tourType,
      });
      dispatch({type: GETTOURDATASUCCESS});
      return res.data;
    } catch (e) {
      console.log(e);
      dispatch({type: GETTOURDATAERROR});
    }
  };