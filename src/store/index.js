import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import banners from './banners';
import staticData from './staticData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    banners,
    staticData,
  },
});
