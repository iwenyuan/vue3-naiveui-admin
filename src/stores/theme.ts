import { defineStore } from 'pinia'
import { getLanguage, setLocale, type Local } from '@/lang/index'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      language: getLanguage()
    }
  },
  getters: {},
  actions: {
    setLanguage(val: Local) {
      this.language = val
      setLocale(val)
    }
  },
  persist: true
})
