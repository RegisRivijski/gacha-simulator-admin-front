import axios from 'axios';

export function bannersAll() {
  return axios
    .get('/gacha-simulator/api/banners/all')
    .then(({ data }) => data);
}

export function bannersChange() {
  return axios
    .put('/gacha-simulator/api/banners')
    .then(({ data }) => data);
}

export function bannersDelete() {
  return axios
    .delete('/gacha-simulator/api/banners')
    .then(({ data }) => data);
}

export function bannersCreate() {
  return axios
    .post('/gacha-simulator/api/banners')
    .then(({ data }) => data);
}
