import axios from 'axios';

export function promocodesAll() {
  return axios
    .get('/gacha-simulator/api/promocodes-all')
    .then(({ data }) => data);
}

export function promocodesGetById(promocodeId) {
  return axios
    .get(`/gacha-simulator/api/promocodes/${promocodeId}`)
    .then(({ data }) => data);
}

export function promocodesChange(promocodeData) {
  return axios
    .put('/gacha-simulator/api/promocodes', { promocodeData })
    .then(({ data }) => data);
}

export function promocodesDelete(promocodeId) {
  return axios
    .delete(`/gacha-simulator/api/promocodes/${promocodeId}`)
    .then(({ data }) => data);
}

export function promocodesCreate(promocodeData) {
  return axios
    .post('/gacha-simulator/api/promocodes', { promocodeData })
    .then(({ data }) => data);
}
