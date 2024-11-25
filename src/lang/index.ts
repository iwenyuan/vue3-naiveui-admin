import { createI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zhCN'

const i18n = createI18n({
  locale: 'zhCN',
  message: {
    'zh-CN': zhCN,
    en: en
  }
})

export default i18n
