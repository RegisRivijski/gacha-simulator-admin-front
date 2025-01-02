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
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/banners/:bannerId',
        name: 'bannersEdit',
        component: () => import('./components/layout/AdminTabs/BannersEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/banners-add',
        name: 'bannersAdd',
        component: () => import('./components/layout/AdminTabs/BannersEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/promocodes',
        name: 'promocodes',
        component: () => import('./components/layout/AdminTabs/PromocodesList/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/promocodes/:promocodeId',
        name: 'promocodesEdit',
        component: () => import('./components/layout/AdminTabs/PromocodesEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/promocodes-add',
        name: 'promocodesAdd',
        component: () => import('./components/layout/AdminTabs/PromocodesEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/advertisements',
        name: 'advertisements',
        component: () => import('./components/layout/AdminTabs/AdvertisementsList/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/advertisements/:advId',
        name: 'advertisementEdit',
        component: () => import('./components/layout/AdminTabs/AdvertisementsEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/advertisements-add',
        name: 'advertisementAdd',
        component: () => import('./components/layout/AdminTabs/AdvertisementsEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/shop-items',
        name: 'shopItems',
        component: () => import('./components/layout/AdminTabs/ShopItemsList/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/shop-items/:shopItemId',
        name: 'shopItemsEdit',
        component: () => import('./components/layout/AdminTabs/ShopItemsEdit/index.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/gacha-simulator/admin/shop-items-add',
        name: 'shopItemsAdd',
        component: () => import('./components/layout/AdminTabs/ShopItemsEdit/index.vue'),
        beforeEnter: authGuard,
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
