import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AuthenticationLayout from '../layouts/authentication/AuthenticationLayout.vue';
import Login from '../views/authentication/Login.vue';
import Register from '../views/authentication/Register.vue';
import ForgotPassword from '../views/authentication/ForgotPassword.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AuthenticationLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
