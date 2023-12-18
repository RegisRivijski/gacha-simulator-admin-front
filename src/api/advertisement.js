import axios from 'axios';

export function advertisementsAll() {
  return axios
    .get('/gacha-simulator/api/advertisements-all')
    .then(({ data }) => data);
}

export function advertisementsGetById(advertisementId) {
  return axios
    .get(`/gacha-simulator/api/advertisements/${advertisementId}`)
    .then(({ data }) => data);
}

export function advertisementsChange(advertisementData) {
  return axios
    .put('/gacha-simulator/api/advertisements', { advertisementData })
    .then(({ data }) => data);
}

export function advertisementsDelete(advertisementId) {
  return axios
    .delete(`/gacha-simulator/api/advertisements/${advertisementId}`)
    .then(({ data }) => data);
}

export function advertisementsCreate(advertisementData) {
  return axios
    .post('/gacha-simulator/api/advertisements', { advertisementData })
    .then(({ data }) => data);
}
