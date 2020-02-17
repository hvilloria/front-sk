import axios from 'axios';
import { API_URL } from '../config/api';

const headers = () => {
  return { headers: JSON.parse(localStorage.getItem("user")) }
};

export const getOrders = async () => {
  return await axios.get(`${API_URL}/api/orders`, headers());
}

export const getCategories = async () => {
  return await axios.get(`${API_URL}/api/categories`, headers());
}

export const getSells = async () => {
  return await axios.get(`${API_URL}/api/sells`, headers());
}

export const createOrder = async (order) => {
  await axios.post(`${API_URL}/api/orders`, order , headers());
}

export const updateVariant = async (variantId, price) => {
  await axios.patch(`${API_URL}/api/variants/${variantId}`,
    { variant: {price} },
    headers()
  )
}

export const updateOrderStatus = async (orderId, orderStatus) => {
  return await axios.patch(`${API_URL}/api/orders/${orderId}/modify_status`,
    orderStatus,
    headers()
  )
}
