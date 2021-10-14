import {
  NOTICEPOST,
  NOTICELIST,
} from '../constants/actions';
import APIHelper from '../helpers/APIHelper';

export const getNoticeList =
  ({notiType}) =>
  async dispatch => {
    console.log('hihi', notiType);
    try {
      dispatch({type: NOTICELIST});
      const res = await APIHelper.post('/faq/getfaqlist', {
        type: notiType,
      });
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

export const doInsertNotice = ({}) => async dispatch => {
  try {
    
  } catch (e) {
    console.log(e);
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