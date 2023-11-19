import axios from 'axios';

export function bannersAll() {
  return axios
    .get('/gacha-simulator/api/banners-all')
    .then(({ data }) => data);
}

export function bannersGetById(bannerId) {
  return axios
    .get(`/gacha-simulator/api/banners/${bannerId}`)
    .then(({ data }) => data);
}

export function bannersChange(bannerData) {
  console.log(bannerData);
  return axios
    .put('/gacha-simulator/api/banners', { bannerData })
    .then(({ data }) => data);
}

export function bannersDelete(bannerId) {
  return axios
    .delete(`/gacha-simulator/api/banners/${bannerId}`)
    .then(({ data }) => data);
}

export function bannersCreate(bannerData) {
  return axios
    .post('/gacha-simulator/api/banners', { bannerData })
    .then(({ data }) => data);
}
