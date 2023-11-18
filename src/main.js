import Vue from 'vue';
import Notifications from 'vue-notification';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './components/common/App/index.vue';

import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue, {
  BPaginationNav: { limit: 15 },
});
Vue.use(IconsPlugin);
Vue.use(Notifications);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
