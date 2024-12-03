import { defineStore } from 'pinia'
import { getTreeMenu } from '@/api/user/menu'
import type { TreeMenu } from '@/types/menu'
import { home } from '@/router/routes'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      activeMenuKey: '',
      treeMenu: [] as TreeMenu[]
    }
  },
  getters: {
    menu(): TreeMenu[] {
      const homeMenu = {
        path: home.path,
        title: home.meta?.title,
        visibility: true
      } as TreeMenu

      return [homeMenu, ...this.treeMenu]
    }
  },
  actions: {
    setActiveMenuKey(key: string) {
      this.activeMenuKey = key
    },
    async GenerateRoutes() {
      try {
        const res = await getTreeMenu()
        this.treeMenu = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
