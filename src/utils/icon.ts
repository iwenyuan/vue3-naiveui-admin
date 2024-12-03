import type { VNodeChild } from 'vue'
import Icon from '@/components/icon/index.vue'

// 渲染icon
export const renderIcon = (icon: string, size: number = 18): (() => VNodeChild) | undefined => {
  if (icon) return () => h(Icon, { icon, size })
  return undefined
}
