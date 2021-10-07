import axios from 'axios';

const API = axios.create({
  baseURL: '',
});

API.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default API;
