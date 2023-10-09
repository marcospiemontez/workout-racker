import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import AuthenticationLayout from '@/layouts/authentication/AuthenticationLayout.vue';
import Login from '@/views/authentication/Login.vue';
import Register from '@/views/authentication/Register.vue';
import ForgotPassword from '@/views/authentication/ForgotPassword.vue';
import LoggedAreaLayout from '@/layouts/loggedArea/LoggedAreaLayout.vue';
import Overview from '@/views/dashboard/Overview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AuthenticationLayout,
    children: [
      {
        path: '',
        redirect: 'login'
      },
      {
        path: '/login',
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
  {
    path: '/loggedArea',
    component: LoggedAreaLayout,
    children: [
      {
        path: '/overview',
        name: 'Overview',
        component: Overview,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
