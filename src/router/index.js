import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TurnRatings from '../views/TurnRatings.vue'
import dashboard from '../views/dashboard.vue'
import AccountUser from '../views/AccountUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/turnRatings',
      name: 'TurnRatings',
      component: TurnRatings
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path:'/accountUser',
      name:'AccountUser',
      component: AccountUser
    }
  ]
})

export default router
