import { defineStore } from 'pinia'
import type { Tag } from '@/types/menu'

export const useTagsStore = defineStore('tags', {
  state: () => {
    return {
      tags: [] as Tag[],
      fullContent: false,
      refreshLoading: true
    }
  },
  actions: {
    setFullContent(val: boolean) {
      this.fullContent = val
    }
  }
})
