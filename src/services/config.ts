import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

/**
 * Request Success Handler
 */
const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
  // add token and continue
  const token = localStorage.getItem('token');

  if (token && config.headers && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

/**
 * Request Fail Handler
 */
const requestErrorHandler = (err: AxiosError) => {
  return Promise.reject(err);
};

/**
 * Response Success Handler
 */
const responseSuccessHandler = (res: AxiosResponse) => {
  // const data = res.data;

  if (200 <= res.status && res.status < 300) {
    return res;
  } else {
    return responseErrorHandler(res);
  }
};

/**
 * Response Fail handler
 */
const responseErrorHandler = (err: AxiosResponse) => {
  return Promise.reject(err);
};

/**
 * Axios
 */
const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Axios Request Middleware
 */
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => requestSuccessHandler(config),
  (err) => requestErrorHandler(err),
);

/**
 * Axios Response Middleware
 */
http.interceptors.response.use(
  (res) => responseSuccessHandler(res),
  (err) => responseErrorHandler(err),
);

export { http };
