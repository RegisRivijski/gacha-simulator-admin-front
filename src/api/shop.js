import axios from 'axios';

export function shopAll() {
  return axios.get('/gacha-simulator/api/shop-items-all').then(({ data }) => data);
}

export function shopGetById(itemId) {
  return axios.get(`/gacha-simulator/api/shop-items/${itemId}`).then(({ data }) => data);
}

export function shopChange(shopItemData) {
  return axios.put('/gacha-simulator/api/shop-items', { shopItemData }).then(({ data }) => data);
}

export function shopDelete(itemId) {
  return axios.delete(`/gacha-simulator/api/shop-items/${itemId}`).then(({ data }) => data);
}

export function shopCreate(shopItemData) {
  return axios.post('/gacha-simulator/api/shop-items', { shopItemData }).then(({ data }) => data);
}
