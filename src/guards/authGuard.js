import store from '../store';

export default async function (_to, _from, next) {
  if (!store.state.user?.login) {
    await store.dispatch('user/me');
    if (!store.state.user?.login) {
      next({ name: 'login' });
      return;
    }
  }
  next();
}
