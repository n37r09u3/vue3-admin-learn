import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
console.log('env=>',import.meta.env)


import config from './config'
import request from './utils/request'
app.config.globalProperties.$request = request
import storage from './utils/storage'
app.config.globalProperties.$storage = storage

import * as Icons from '@element-plus/icons-vue'
// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')

