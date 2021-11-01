import {
  GETTOURDATA,
  GETTOURDATASUCCESS,
  GETTOURDATAERROR,
  GETEXPDATA,
  GETEXPDATASUCCESS,
  GETEXPDATAERROR,
  GETTOURDETAIL,
  GETTOURDETAILSUCCESS,
  GETTOURDETAILERROR,
  GETTOUREXPREVIEWS,
  GETTOUREXPREVIEWSSUCCESS,
  GETTOUREXPREVIEWSERROR,
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

export const getExpDetail =
  ({idx}) =>
  async dispatch => {
    try {
      dispatch({type: GETTOURDETAIL});
      const res = await APIHelper.post('/exp/getexpinfo', {
        idx: idx,
      });
      dispatch({type: GETTOURDETAILSUCCESS});
      return res.data;
    } catch (e) {
      dispatch({type: GETTOURDETAILERROR});
    }
  };

export const getExpReviews =
  ({idx}) =>
  async dispatch => {
    try {
      dispatch({type: GETTOUREXPREVIEWS});
      const res = await APIHelper.post('/review/getreviewlist', {
        exp_idx: idx,
      });
      dispatch({type: GETTOUREXPREVIEWSSUCCESS});
      return res.data;
    } catch (e) {
      dispatch({type: GETTOUREXPREVIEWSERROR});
    }
  };