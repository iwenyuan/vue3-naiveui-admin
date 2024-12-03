import { setting } from '@/setting'
import { useCssVar } from '@vueuse/core'
import { kebabCase } from 'lodash-es'
import { RouterLink } from 'vue-router'
import { useTagsStore } from '@/stores/tags'

// 全局css变量
export const useVarCss = () => {
  document.title = setting.title

  const common: Record<string, string> = setting.naiveThemeOverrides.common
  for (const key in common) {
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value = common[key] || ''
  }
}

// 使用v-router跳转
export const hRouter = (label: string, router: string) => {
  return () =>
    h(
      RouterLink,
      {
        to: {
          path: router
        }
      },
      {
        default: () => label
      }
    )
}

// 计算content高度（需要在setup中使用）
export const calcHeight = (type: string = '') => {
  const tagStore = useTagsStore()

  if (tagStore.fullContent) return 'calc(100vh - 20px)'

  let height = 60
  if (type === 'main') height += 20
  return `calc(100vh -${height}px)`
}
