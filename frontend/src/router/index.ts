import { createRouter, createWebHistory } from 'vue-router'
import GridView from '@/views/GridView.vue'
import CompanyDetailView from '@/views/CompanyDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GridView,
    },
    {
      path: '/company-detail',
      name: 'company detail',
      component: CompanyDetailView,
    },
  ],
})

export default router
