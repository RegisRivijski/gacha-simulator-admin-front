import store from '../store';

export default async function (to, from, next) {
  await store.dispatch('user/me');
  if (!store.state.user?.login) {
    this.$router.push({ name: 'login' });
  } else {
    next();
  }
}
