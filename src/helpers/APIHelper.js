import axios from 'axios';
import Config from 'react-native-config';

const API = axios.create({
  baseURL: Config.API_URL,
  withCredentials: true,
  exposedHeaders: ['JSESSIONID'],
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
  API.defaults.headers.Cookies = JSON.parse(cookie);
};

export default API;
