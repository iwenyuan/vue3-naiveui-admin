import './style.scss'
import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import i18n from './lang'
import { useVarCss } from './utils/help'

const app = createApp(App)

useVarCss()

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
