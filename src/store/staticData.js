import * as authApi from '../api/auth';

export default {
  namespaced: true,
  state: () => ({
    userId: null,
    fio: null,
  }),
  mutations: {
    setUser(state, user) {
      state.userId = user.userId;
      state.fio = user.fio;
    },
  },
  actions: {
    async login({ commit }, { login, password }) {
      const loginResponse = await authApi.loginAction({
        login,
        password,
      })
        .catch(e => {
          console.error('[ERROR] store/user/actions/Login:', e.message);
        });

      if (loginResponse?.data) {
        commit('setUser', {
          userId: loginResponse?.data?.user_id,
          fio: loginResponse?.data?.fio,
        });
      }
    },

    async exit({ commit }) {
      await authApi.exit()
        .catch(e => {
          console.error('[ERROR] store/user/actions/user:', e.message);
        });
      commit('setUser', { userId: null, fio: null });
    },

    async me({ commit }) {
      const meResponse = await authApi.me()
        .catch(e => {
          console.error('[ERROR] store/user/actions/me:', e.message);
        });

      if (meResponse?.data) {
        commit('setUser', {
          userId: meResponse?.data?.user_id,
          fio: meResponse?.data?.fio,
        });
      }
    },
  },
};
