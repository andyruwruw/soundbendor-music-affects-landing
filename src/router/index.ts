// Packages
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

// Local Imports
import HomeView from '../views/home/home-view.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about-view.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/download/download-view.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
