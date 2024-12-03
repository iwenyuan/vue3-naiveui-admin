import type { TreeMenu } from '@/types/menu'
import type { MenuOption } from 'naive-ui'
import { hRouter } from './help'
import { renderIcon } from './icon'

// 根据路由生成菜单配置
export const buildMenuOptions = (menu: TreeMenu[]): MenuOption[] => {
  const result: MenuOption[] = []

  menu.map((item) => {
    if (!item.visibility) return

    const r: MenuOption = {
      name: item.name,
      keepAlive: item.keepAlive,
      title: item.menuType === 1 ? item.title : hRouter(item.title as string, item.path),
      path: item.path,
      icon: renderIcon(item.icon as string),
      menuType: item.menuType
    }

    if (item.children) r.children = buildMenuOptions(item.children)

    result.push(r)
  })

  return result
}
