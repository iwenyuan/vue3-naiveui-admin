import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 白名单
const whiteList = new Set(['/login'])

router.beforeEach((to, from, next) => {
  if (whiteList.has(to.path)) return next()

  const userStore = useUserStore()
  if (userStore.token) {
    if (to.path === '/login') return next('/')
    next()
  } else {
    next('/login')
  }
})

export default router
