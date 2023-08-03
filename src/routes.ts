import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('@/pages/AboutLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/About.vue'),
        },
        {
          path: 'you',
          component: () => import('@/pages/AboutYou.vue'),
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/pages/AuthLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/AuthLogin.vue'),
        },
        {
          path: 'register',
          component: () => import('@/pages/AuthRegister.vue'),
        },
      ],
    },
    {
      path: '/:path(.*)',
      component: () => import('@/pages/ErrorNotFound.vue'),
    },
  ],
});
