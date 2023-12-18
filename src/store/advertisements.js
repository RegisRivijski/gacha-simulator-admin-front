import Vue from 'vue';

import * as advertisementApi from '../api/advertisement';
import * as documentsUtil from '../utils/documents';

import advertisementTemplate from './dataTemplates/advertisement';

export default {
  namespaced: true,
  state: () => ({
    currentAdv: {},
    allAdv: [],
  }),
  mutations: {
    setAllAdv(state, allAdv) {
      Vue.set(state, 'allAdv', allAdv);
    },
    setCurrentAdv(state, currentAdv) {
      const merged = documentsUtil.mergeObjects(advertisementTemplate, currentAdv);
      Vue.set(state, 'currentAdv', merged);
    },
  },
  getters: {
    allAdv(state) {
      return state.allAdv;
    },
    currentAdv(state) {
      return state.currentAdv;
    },
  },
  actions: {
    async fetchAllAdv({ commit }) {
      const allAdvData = await advertisementApi.advertisementsAll();

      commit('setAllAdv', allAdvData);
    },
    async fetchAdvById({ commit }, advId) {
      const advertisementData = await advertisementApi.advertisementsGetById(advId);

      if (advertisementData?._id) {
        commit('setCurrentAdv', advertisementData);
      }
    },
    async deleteAdvById(ctx, advId) {
      await advertisementApi.advertisementsDelete(advId);
    },
    async changeAdvById(ctx, advertisementData) {
      await advertisementApi.advertisementsChange(advertisementData);
    },
    async createAdv(ctx, advertisementData) {
      await advertisementApi.advertisementsCreate(advertisementData);
    },
  },
};
