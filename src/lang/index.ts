import { createI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zhCN'
import { useNavigatorLanguage } from '@vueuse/core'

export type Local = 'en' | 'zh-CN'

// 获取浏览器默认语言
const { language } = useNavigatorLanguage()

// 获取语言类型
export const getLanguage = () => {
  let local = localStorage.getItem('local')
  if (!local && language.value) {
    local = language.value
    setLocale(local as Local)
  }
  return local as string
}

// 设置语言类型
export const setLocale = (local: Local) => {
  localStorage.setItem('local', local)
}

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: {
    'zh-CN': zhCN,
    en: en
  }
})

export default i18n
