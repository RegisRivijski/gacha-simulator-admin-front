import axios from 'axios';

export function loginAction({ login, password }) {
  return axios
    .post('/gacha-simulator/api/admin/login', {
      login,
      password,
    })
    .then(({ data }) => data);
}

export function exit() {
  return axios
    .post('/gacha-simulator/api/admin/exit')
    .then(({ data }) => data);
}

export function me() {
  return axios
    .get('/gacha-simulator/api/admin/me')
    .then(({ data }) => data);
}
