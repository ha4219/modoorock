import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
  GETEXPDATA,
  GETEXPDATASUCCESS,
  GETEXPDATAERROR,
} from '../constants/actions';

import APIHelper from '../helpers/APIHelper';

export const getTourData =
  ({tourType}) =>
  async dispatch => {
    console.log('apiTTTTEst', tourType);
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

export const getExpData =
  ({expType}) =>
  async dispatch => {
    console.log('apiExpTest', expType);
    try {
      dispatch({type: GETEXPDATA});
      const res = await APIHelper.post('/exp/getexplist', {
        theme: expType,
      });
      dispatch({type: GETEXPDATASUCCESS});
      return res.data;
    } catch (e) {
      console.log(GETEXPDATAERROR, e);
      dispatch({type: GETEXPDATAERROR});
    }
  };
