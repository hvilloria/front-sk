import axios from 'axios';
import { API_URL } from '../config/api';

export const login = async authData => {
  return await axios.post(`${API_URL}/auth/sign_in`, authData);
};


export const logOut = async authData => {
  localStorage.clear();
  await axios.delete(`${API_URL}/auth/sign_out`, { headers: authData });
};
