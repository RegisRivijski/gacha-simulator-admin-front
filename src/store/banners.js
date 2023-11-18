import Vue from 'vue';

import * as bannersApi from '../api/banners';

export default {
  namespaced: true,
  state: () => ({
    currentBanner: {},
    allBannersData: [],
    loading: false,
    filters: {},
  }),
  mutations: {
    setAllBannersData(state, allBannersData) {
      Vue.set(state, 'allBannersData', allBannersData);
    },
    setLoading(state, loading) {
      Vue.set(state, 'loading', loading);
    },
  },
  getters: {
    allBannersData(state) {
      return state.allBannersData;
    },
  },
  actions: {
    async fetchAllBanners({ commit }) {
      commit('setLoading', true);

      const allBannersData = await bannersApi.bannersAll()
        .catch(e => {
          console.error('bannersApi.bannersAll():', e.message);
        })
        .finally(() => {
          commit('setLoading', false);
        });

      if (allBannersData?.length) {
        commit('setAllBannersData', allBannersData);
      }
    },
  },
};
