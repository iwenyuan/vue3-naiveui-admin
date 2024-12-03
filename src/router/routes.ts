import type { RouteRecordRaw } from 'vue-router'

export const home: RouteRecordRaw = {
  path: '/workbenches',
  component: () => import('@/views/workbenches/index.vue'),
  meta: {
    title: '工作台',
    name: 'Workbenches',
    visibility: true,
    icon: 'material-symbols:home-outline',
    keepAlive: false
  }
}

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
    component: () => import('@/layout/index.vue'),
    children: [home],
    meta: {
      title: '工作台',
      visibility: true,
      menuType: 1
    }
  }
]
