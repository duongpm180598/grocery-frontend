import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
import { stringify } from 'query-string';

const authorizedRequest: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => {
    return stringify(params, { arrayFormat: 'separator' });
  }
});

// authorizedRequest.interceptors.request.use((config: AxiosRequestConfig) => {
//   const newConfig = { ...config };
//   const { token } = tokenManager;
//   newConfig.headers.common.Authorization =
//     token && token !== 'guest' ? `Bearer ${token}` : '';
//   return newConfig;
// });

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error && error.response && error.response.status === 401) {
      console.log('Session expired');
    }
    throw error;
  }
);

export default authorizedRequest;
