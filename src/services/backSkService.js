import axios from 'axios';
import { API_URL } from '../config/api';

const headers = () => JSON.parse(localStorage.getItem("user"));

export const getOrders = async () => {
  return await axios.get(`${API_URL}/api/orders`, { headers: headers() });
}

export const getCategories = async () => {
  return await axios.get(`${API_URL}/api/categories`, { headers: headers() });
}
