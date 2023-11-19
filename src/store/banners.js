import Vue from 'vue';

import * as bannersApi from '../api/banners';
import * as documentsUtil from '../utils/documents';

import bannerTemplate from './dataTemplates/banner';

export default {
  namespaced: true,
  state: () => ({
    currentBanner: {},
    allBannersData: [],
  }),
  mutations: {
    setAllBannersData(state, allBannersData) {
      Vue.set(state, 'allBannersData', allBannersData);
    },
    setCurrentBanner(state, bannerData) {
      const mergedBannerData = documentsUtil.mergeObjects(bannerTemplate, bannerData);
      Vue.set(state, 'currentBanner', mergedBannerData);
    },
  },
  getters: {
    allBannersData(state) {
      return state.allBannersData;
    },
    currentBanner(state) {
      return state.currentBanner;
    },
  },
  actions: {
    async fetchAllBanners({ commit }) {
      const allBannersData = await bannersApi.bannersAll();

      if (allBannersData?.length) {
        commit('setAllBannersData', allBannersData);
      }
    },
    async fetchBannerById({ commit }, bannerId) {
      const bannerData = await bannersApi.bannersGetById(bannerId);

      if (bannerData?._id) {
        commit('setCurrentBanner', bannerData);
      }
    },
    async deleteBannerById(ctx, bannerId) {
      await bannersApi.bannersDelete(bannerId);
    },
    async changeBannerById(ctx, bannerData) {
      await bannersApi.bannersChange(bannerData);
    },
    async createBanner(ctx, bannerData) {
      await bannersApi.bannersCreate(bannerData);
    },
  },
};
