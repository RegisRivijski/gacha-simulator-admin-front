import Vue from 'vue';

import * as documentsUtil from '../utils/documents';
import * as staticDataApi from '../api/staticData';

export default {
  namespaced: true,
  state: () => ({
    characters: [],
    weapons: [],
  }),
  mutations: {
    setCharacters(state, characters) {
      const array = Object.values(characters);
      const sortedArray = documentsUtil.sortArrayOfObjectsByKey(array, 'objKey');
      Vue.set(state, 'characters', sortedArray);
    },
    setWeapons(state, weapons) {
      const array = Object.values(weapons);
      const sortedArray = documentsUtil.sortArrayOfObjectsByKey(array, 'objKey');
      Vue.set(state, 'weapons', sortedArray);
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    weapons(state) {
      return state.weapons;
    },
  },
  actions: {
    async getAllItems({ commit }) {
      const characters = await staticDataApi.getItemsData('characters', 'ru');

      const weapons = await staticDataApi.getItemsData('weapons', 'ru');

      if (characters) {
        commit('setCharacters', characters);
      }
      if (weapons) {
        commit('setWeapons', weapons);
      }
    },
  },
};
