import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    menuType?: 0 | 1 | 2
    icon?: string
    name?: string
    component?: string
    keepAlive?: boolean
    externalLink?: boolean
    competence?: string
    link?: string
    sort?: number
  }
  RouteRecordRaw
}
