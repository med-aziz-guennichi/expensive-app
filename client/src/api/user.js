import axios from 'axios';

export const apiLogin = request_data => {
  return axios.post('http://localhost:5000/api/v1/login', request_data);
};

export const apitFetchProfile = () => {
  return axios.get('http://localhost:5000/api/v1/me');
};

export const apiSignUp = request_data => {
  return axios.post('http://localhost:5000/api/v1/register', request_data);
};
