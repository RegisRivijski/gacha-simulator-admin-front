import store from '../store';

export default async function (to, from, next) {
  await store.dispatch('user/me');
  if (!store.state.user?.login) {
    return next({ name: 'login' });
  }
  return next();
}
