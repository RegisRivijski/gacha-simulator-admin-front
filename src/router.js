import Vue from 'vue';
import VueRouter from 'vue-router';

import authGuard from './guards/authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./components/layout/Login/index.vue'),
  },
  {
    path: '/',
    name: 'mainPage',
    component: () => import('./components/layout/MainPage/index.vue'),
    beforeEnter: authGuard,
    children: [
      {
        path: '/gacha-simulator/admin/banners',
        name: 'banners',
        component: () => import('./components/layout/AdminTabs/BannersList/index.vue'),
      },
      {
        path: '/gacha-simulator/admin/banners/:bannerObjKey',
        name: 'bannersEdit',
        component: () => import('./components/layout/AdminTabs/BannersEdit/index.vue'),
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
