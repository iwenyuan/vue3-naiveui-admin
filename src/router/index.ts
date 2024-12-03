import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/stores/user'
import { useMenuStore } from '@/stores/menu'

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

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title + '-' + import.meta.env.VITE_TITLE
  }

  const menuStore = useMenuStore()

  menuStore.setActiveMenuKey(to.path)
})

export default router
