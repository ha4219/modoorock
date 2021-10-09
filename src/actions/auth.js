import axios from 'axios';

import {
  SIGNUP,
  SIGNUPERROR,
  LOGIN,
  LOGINERROR,
  LOGINSUCCESS,
} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const doSignup =
  ({id, pw, name, ph}) =>
  async dispatch => {
    console.log('dongha', APIHelper);
  try {
    dispatch({type: SIGNUP});
    const res = await APIHelper.post(
      '/user/register',
      {
        id: id,
        password: pw,
        name: name,
        phone: ph,
    });
    console.log('success!!',res.data);
  } catch (err) {
    console.log('ERRPR', err, err.status);
    if (err && err.status === 401) {
      console.log(err);
    }
    dispatch({type: SIGNUPERROR});
  }
};

export const doLogin =
  ({id, pw}) =>  
  async dispatch => {
    try{
      dispatch({type:LOGIN});
      const res = await APIHelper.post(
        '/user/login',
        {
          id: id,
          password: pw,
        }
      );
      const data = res.data;
      const {name: name} = data;
      console.log(data, res.data, name);
      dispatch({type: LOGINSUCCESS, payload: data});
    }catch(err){
      console.log('ERROR',err);
      dispatch({type: LOGINERROR});
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
};