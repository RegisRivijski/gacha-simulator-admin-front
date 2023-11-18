import * as authApi from '../api/auth';

export default {
  namespaced: true,
  state: () => ({
    login: null,
  }),
  mutations: {
    setUser(state, login) {
      state.login = login;
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

      if (loginResponse?.login) {
        commit('setUser', loginResponse.login);
      }

      return loginResponse;
    },

    async exit({ commit }) {
      await authApi.exit()
        .catch(e => {
          console.error('[ERROR] store/user/actions/user:', e.message);
        });
      commit('setUser', null);
    },

    async me({ commit }) {
      const meResponse = await authApi.me()
        .catch(e => {
          console.error('[ERROR] store/user/actions/me:', e.message);
        });

      if (meResponse?.login) {
        commit('setUser', meResponse.login);
      } else {
        commit('setUser', null);
      }
    },
  },
};
