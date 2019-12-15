import axios from 'axios';
import { setUser } from '../utils/user';
import { API_URL } from '../config/api';

export const login = async authData => {
  const response = await axios.post(`${API_URL}/auth/sign_in`, authData);
  setUser(response);
};


export const logOut = async authData => {
  await axios.delete(`${API_URL}/auth/sign_out`, { headers: authData });
  localStorage.clear();
};
