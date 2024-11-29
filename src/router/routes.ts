import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'Workbenches',
    component: () => import('@/views/workbenches/index.vue'),
    meta: {
      title: '首页'
    }
  }
]
