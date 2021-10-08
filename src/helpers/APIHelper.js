import axios from 'axios';
import Config from 'react-native-config';

const API = axios.create({
  baseURL: Config.API_URL,
});

API.interceptors.request.use(
  function (config) {
    console.log('api request',config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default API;
