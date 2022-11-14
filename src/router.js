import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/CompanyView.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/UsersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
