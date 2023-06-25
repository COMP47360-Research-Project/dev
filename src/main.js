import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'

import '@/../node_modules/bootstrap/dist/css/bootstrap.css'
import '@/../node_modules/bootstrap/dist/js/bootstrap.js'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/el-message.css'




createApp(App).use(Element).use(store).use(router).mount('#app')
