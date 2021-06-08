import { createWebHistory, createRouter } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'TrendingRepositoryPage',
    component: () => import('@/views/TrendingRepositoryPage.vue'),
  },
  {
    path: '/developers',
    name: 'TrendingDevelopersPage',
    component: () => import('@/views/TrendingDevelopersPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
