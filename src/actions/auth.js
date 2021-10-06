import axios from 'axios';

import {SIGNUP, SIGNUPERROR} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const doSignup =
  ({id, pw, name, ph}) =>
  async dispatch => {
  try {
    dispatch({type: SIGNUP});
    const res = await APIHelper.post(
      '/api/v1/signup',
      {
        id: id,
        password: pw,
        name: name,
        // phone: ph,
    });
    console.log(res.toString());
  } catch (err) {
    console.log('ERRPR', err, err.status);
    if (err && err.status === 401) {
      console.log(err);
    }
    dispatch({type: SIGNUPERROR});
  }
};

export const test = () => async dispatch => {
  try {
    const res = await APIHelper.get(
      '',{}
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}