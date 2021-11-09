import {
  UPLOADIMAGE,
  UPLOADIMAGESUCCESS,
  UPLOADIMAGEERROR,
  GETMISSIONLIST,
  GETMISSIONLISTSUCCESS,
  GETMISSIONLISTERROR,
  GETUSEREXPLIST,
  GETUSEREXPLISTSUCCESS,
  GETUSEREXPLISTERROR,
} from '../constants/actions';
import APIUploadHelper from '../helpers/APIUploadHelper';
import APIHelper from '../helpers/APIHelper';

export const uploadImage = data => async dispatch => {
  try {
    dispatch({type: UPLOADIMAGE});
    const formData = new FormData();
    formData.append('title', 'donghahaha');
    formData.append('content', 'test하고있습니다.');
    formData.append('userIdx', 12);
    formData.append('price', 1024);
    formData.append('theme', '가족');
    formData.append('attractionIdx', 2);
    formData.append('files', {
      name: data.filename,
      uri: data.uri,
      type: 'image/jpeg',
    });
    const res = await APIUploadHelper.post('/exp/insertexp', formData);
    console.log('결과는??????\n', res);
    dispatch({type: UPLOADIMAGESUCCESS});
  } catch (e) {
    console.log(e);
    console.log(e.message);
    dispatch({type: UPLOADIMAGEERROR});
  }
};

export const uploadVideo = data => async dispatch => {
  try {
    dispatch({type: UPLOADIMAGE});
    const formData = new FormData();
    formData.append('title', '가나다라마바사');
    formData.append('content', 'hihihi');
    formData.append('userIdx', 12);
    formData.append('price', 2048);
    formData.append('theme', '가족');
    formData.append('attractionIdx', 2);
    formData.append('files', {
      name: data.filename,
      uri: data.uri,
      type: 'image/jpeg',
    });
    const res = await APIUploadHelper.post('/exp/insertexp', formData);
    console.log('결과는??????\n', res);
    dispatch({type: UPLOADIMAGESUCCESS});
  } catch (e) {
    console.log(e);
    dispatch({type: UPLOADIMAGEERROR});
  }
};

export const getMissionList =
  ({idx}) =>
  async dispatch => {
    try {
      dispatch({type: GETMISSIONLIST});
      const res = await APIHelper.post('/mission/getmissionlist', {
        gameIdx: idx,
      });
      dispatch({type: GETMISSIONLISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(e);
      dispatch({type: GETMISSIONLISTERROR});
    }
  };

export const getUserExpList =
  ({idx}) =>
  async dispatch => {
    try {
      dispatch({type: GETUSEREXPLIST});
      const res = await APIHelper.post('/userexp/getuserexplist', {
        userIdx: idx,
      });
      dispatch({type: GETUSEREXPLISTSUCCESS});
      return res.data;
    } catch (e) {
      console.log(GETUSEREXPLISTERROR, e);
      dispatch({type: GETUSEREXPLISTERROR});
    }
  };
