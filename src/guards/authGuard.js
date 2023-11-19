import store from '../store';

export default async function (to, from, next) {
  await store.dispatch('user/me')
    .catch(() => this.$router.push({ name: 'login' }));

  if (store.state.user?.login) {
    next();
  }
}
