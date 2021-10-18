import axios from 'axios';
import Config from 'react-native-config';

const API = axios.create({
  baseURL: 'https://modoorock.kro.kr/modoorock',
  withCredentials: true,
});

API.interceptors.request.use(
  function (config) {
    console.log('api request', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function (config) {
    console.log('api response', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const setCookie = cookie => {
  console.log(cookie);
  API.defaults.headers.Cookie = cookie;
};

export default API;
