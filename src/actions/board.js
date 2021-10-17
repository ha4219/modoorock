import {
  NOTICEPOST,
  NOTICELIST,
  GETFAQLIST,
  GETFAQLISTSUCCESS,
  GETFAQLISTERROR,
} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const getNoticeList =
  ({notiType}) =>
  async dispatch => {
    try {
      dispatch({type: NOTICELIST});
      const res = await APIHelper.post('/notice/getnoticelist', {
        type: notiType,
      });
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

export const doInsertNotice =
  ({faqType}) =>
  async dispatch => {
    try {
      dispatch({type: GETFAQLIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: faqType,
      });
      dispatch({type: GETFAQLISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(e);
      dispatch({type: GETFAQLISTERROR});
    }
  };

export const getFaqList =
  ({faqType}) =>
  async dispatch => {
    try {
      console.log('faq test', faqType);
      dispatch({type: GETFAQLIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: faqType,
      });
      dispatch({type: GETFAQLISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(e);
      dispatch({type: GETFAQLISTERROR});
    }
  };

export const test =
  () =>
  async dispatch => {
    console.log("testtest");
    try {
      const res = await APIHelper.post('/user/session', {
      });
      console.log(res.data);
      return res;
    } catch (e) {
      console.log(e);
      return [];
    }
  };