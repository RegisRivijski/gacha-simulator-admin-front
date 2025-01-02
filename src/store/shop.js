import Vue from 'vue';
import * as shopApi from '../api/shop';

export default {
  namespaced: true,
  state: () => ({
    allShopItems: [],
    currentShopItem: {},
  }),
  mutations: {
    setAllShopItems(state, allShopItems) {
      Vue.set(state, 'allShopItems', allShopItems);
    },
    setCurrentShopItem(state, currentShopItem) {
      Vue.set(state, 'currentShopItem', currentShopItem);
    },
  },
  getters: {
    allShopItems(state) {
      return state.allShopItems;
    },
    currentShopItem(state) {
      return state.currentShopItem;
    },
  },
  actions: {
    async fetchAllShopItems({ commit }) {
      const allShopItemsData = await shopApi.shopAll();
      commit('setAllShopItems', allShopItemsData);
    },
    async fetchShopItemById({ commit }, itemId) {
      const shopItemData = await shopApi.shopGetById(itemId);
      commit('setCurrentShopItem', shopItemData);
    },
    async deleteShopItemById(ctx, itemId) {
      await shopApi.shopDelete(itemId);
    },
    async changeShopItemById(ctx, shopItemData) {
      await shopApi.shopChange(shopItemData);
    },
    async createShopItem(ctx, shopItemData) {
      await shopApi.shopCreate(shopItemData);
    },
  },
};
