// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import QlLogin from '@/views/QlLogin.vue';
import HomePage from '@/views/HomePage.vue';
import ShohinZaiko from '@/views/ShohinZaiko.vue';
import AddProduct from '@/views/AddProduct.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: QlLogin,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/shohinzaiko',
    name: 'shohinzaiko',
    component: ShohinZaiko,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
