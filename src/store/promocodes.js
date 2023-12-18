import Vue from 'vue';

import * as promocodesApi from '../api/promocodes';
import * as documentsUtil from '../utils/documents';

import promocodeTemplate from './dataTemplates/promocode';

export default {
  namespaced: true,
  state: () => ({
    currentPromocode: {},
    allPromocodes: [],
  }),
  mutations: {
    setAllPromocodes(state, allPromocodes) {
      Vue.set(state, 'allPromocodes', allPromocodes);
    },
    setCurrentPromocode(state, currentPromocode) {
      const merged = documentsUtil.mergeObjects(promocodeTemplate, currentPromocode);
      Vue.set(state, 'currentPromocode', merged);
    },
  },
  getters: {
    allPromocodes(state) {
      return state.allPromocodes;
    },
    currentPromocode(state) {
      return state.currentPromocode;
    },
  },
  actions: {
    async fetchAllPromocodes({ commit }) {
      const allPromocodesData = await promocodesApi.promocodesAll();

      commit('setAllPromocodes', allPromocodesData);
    },
    async fetchPromocodesById({ commit }, promocodeId) {
      const promocodeData = await promocodesApi.promocodesGetById(promocodeId);

      if (promocodeData?._id) {
        commit('setCurrentPromocode', promocodeData);
      }
    },
    async deletePromocodeById(ctx, promocodeId) {
      await promocodesApi.promocodesDelete(promocodeId);
    },
    async changePromocodeById(ctx, promocodeData) {
      await promocodesApi.promocodesChange(promocodeData);
    },
    async createPromocode(ctx, promocodeData) {
      await promocodesApi.promocodesCreate(promocodeData);
    },
  },
};
