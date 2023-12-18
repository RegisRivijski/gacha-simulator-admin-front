import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import banners from './banners';
import staticData from './staticData';
import promocodes from './promocodes';
import advertisements from './advertisements';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    banners,
    staticData,
    promocodes,
    advertisements,
  },
});
