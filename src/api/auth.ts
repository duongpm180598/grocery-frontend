import axios from 'axios';

export const login = (params) => {
  return axios
    .post(`http://localhost:5000/api/user/login/`, params)
    .then((res) => res)
    .catch((error) => error);
};

export const setLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getLocalStorage = () => {
  return localStorage.getItem('user');
};

export const removeLocalStorage = () => {
  localStorage.removeItem('user');
};
