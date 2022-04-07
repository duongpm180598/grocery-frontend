import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { stringify } from 'query-string';

const unauthorizedRequest: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => {
    return stringify(params, { arrayFormat: 'comma' });
  }
});

unauthorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    throw error;
  }
);

export default unauthorizedRequest;
