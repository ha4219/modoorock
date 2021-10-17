import {
  NOTICEPOST,
  NOTICELIST,
  GETFAQLIST,
  GETFAQLISTSUCCESS,
  GETFAQLISTERROR,
  GETQNALIST,
  GETQNALISTSUCCESS,
  GETQNALISTERROR,
  INSERTQNA,
  INSERTQNASUCCESS,
  INSERTQNAERROR,
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
      dispatch({type: GETFAQLIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: faqType,
      });
      dispatch({type: GETFAQLISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(GETFAQLISTERROR, e);
      dispatch({type: GETFAQLISTERROR});
    }
  };

export const getQnaList =
  ({idx}) =>
  async dispatch => {
    try {
      dispatch({type: GETQNALIST});
      const res = await APIHelper.post('/qna/getqnalist', {
        userIdx: idx,
      });
      dispatch({type: GETQNALISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(GETQNALISTERROR, e);
      dispatch({type: GETQNALISTERROR});
    }
  };

export const insertQng =
  ({idx, title, content}) =>
  async dispatch => {
    try {
      dispatch({type: INSERTQNA});
      const res = await APIHelper.post('/qna/insertqna', {
        userIdx: idx,
        title: title,
        content: content,
      });
      dispatch({type: INSERTQNASUCCESS});
      return res.data;
    } catch (e) {
      console.log(INSERTQNAERROR, e);
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