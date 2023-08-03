import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/page/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('@/page/AboutLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/page/About.vue'),
        },
        {
          path: 'you',
          component: () => import('@/page/AboutYou.vue'),
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/page/AuthLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/page/AuthLogin.vue'),
        },
        {
          path: 'register',
          component: () => import('@/page/AuthRegister.vue'),
        },
      ],
    },
    {
      path: '/books',
      component: () => import('@/page/BookLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/page/BookList.vue')
        },
      ],
    },
    {
      path: '/:path(.*)',
      component: () => import('@/page/ErrorNotFound.vue'),
    },
  ],
});
