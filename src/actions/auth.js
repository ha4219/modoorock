import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SIGNUP,
  SIGNUPERROR,
  LOGIN,
  LOGINERROR,
  LOGINSUCCESS,
  LOGOUT,
  FINDID,
  FINDPW,
  GETSESSION,
  GETSESSIONSUCCESS,
  GETSESSIONERROR,
} from '../constants/actions';
import APIHelper, {setCookie, removeCookie} from '../helpers/APIHelper';

const storeHeader = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

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
    try {
      dispatch({type: LOGIN});
      const res = await APIHelper.post('/user/login', {
        id: id,
        password: pw,
      });
      console.log('headers', res.headers);
      console.log('data', res.data);
      const [cookie] = res.headers['set-cookie'];
      console.log(cookie);
      const data = cookie.split(' ')[0];
      console.log('show data', data);
      setCookie(data);
      await storeHeader('cookie', data);
      dispatch({type: LOGINSUCCESS, payload: cookie});
      // dispatch({type: LOGINSUCCESS, payload: 'cookie'});
      return true;
    } catch (err){
      console.log('ERROR', err);
      dispatch({type: LOGINERROR});
    }
  };

export const autoLogin =
  ({data}) =>
  async dispatch => {
    try {
      dispatch({type: LOGIN});
      console.log('get???', data);
      setCookie(data);
      dispatch({type: LOGINSUCCESS, payload: data});
      return data;
    } catch (e) {
      console.log('ERROR', e);
      dispatch({type: LOGINERROR});
    }
  };

export const doFindId = ph => async dispatch => {
  try {
    dispatch({type: FINDID});
    const res = await APIHelper.post('/user/findid', {
      phone: ph,
    });
    const data = res.data;
    return data;
  } catch (e){
    console.log(e);
    return 'ERROR';
  }
};

export const doFindPw =
  ({value1, value2, value3}) =>
  async dispatch => {
  try {
    dispatch({type: FINDPW});
    const res = await APIHelper.post('/user/findpassword', {
      name: value1,
      phone: value2,
      password: value3,
    });
    return res.status;
  } catch (e) {
    console.log(e);
    return 'ERROR';
  }
};

export const doLogOut = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('cookie');
    // removeCookie();
    const res = await APIHelper.post('/user/logout', {});
    console.log('logout test', res);
    dispatch({type: LOGOUT});
  } catch (e) {
    console.log(e);
  }
};

export const getSession = () => async dispatch => {
  try {
    console.log(GETSESSION, 'session hi');
    dispatch({type: GETSESSION});
    console.log('preheader', APIHelper.defaults.headers);
    const res = await APIHelper.post('/user/session', {});
    console.log('session last test', res.data);

    // const data = cookie.split(' ')[0];
    // if (APIHelper.defaults.headers.Cookie !== data) {
    //   setCookie(data);
    //   await storeHeader('cookie', data);
    // }
    dispatch({type: GETSESSIONSUCCESS, payload: res.data});
    return res;
  } catch (e) {
    console.log(GETSESSIONERROR, e, e.status);
    dispatch({type: GETSESSIONERROR});
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