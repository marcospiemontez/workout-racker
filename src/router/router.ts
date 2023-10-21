import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Navigation from '@/layouts/Navigation.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Create from '@/views/Create.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Navigation,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
      {
        path: 'create',
        name: 'Create',
        component: Create,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
