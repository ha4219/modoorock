import {NOTICEPOST, NOTICELIST} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const doSignup =
  ({id, pw, name, ph}) =>
  async dispatch => {
    try {
      dispatch({type: SIGNUP});
      const res = await APIHelper.post('/user/register', {
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

export const getFaqList =
  ({faqType}) =>
  async dispatch => {
    console.log('hihi', faqType);
    try {
      dispatch({type: NOTICELIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: faqType,
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

export const getNoticeList =
  ({notiType}) =>
  async dispatch => {
    console.log('hihi', notiType);
    try {
      dispatch({type: NOTICELIST});
      const res = await APIHelper.post('/notice/getnoticelist', {
        type: notiType,
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

export const test = () => async dispatch => {
  console.log('testtest');
  try {
    const res = await APIHelper.post('/user/session', {});
    console.log(res.data);
    return res;
  } catch (e) {
    console.log(e);
    return [];
  }
};
