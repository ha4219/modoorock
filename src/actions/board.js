import {
  NOTICEPOST,
  NOTICELIST,
} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const doSignup =
  ({id, pw, name, ph}) =>
  async dispatch => {
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

export const getNoticeList =
  ({notiType}) =>
  async dispatch => {
    console.log('hihi', notiType);
    try {
      dispatch({type: NOTICELIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: notiType,
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
