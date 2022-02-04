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
import { createPinia } from 'pinia'
const pinia = createPinia()
// 注册Icons 全局组件
import * as ELIcons from '@element-plus/icons-vue'
Object.keys(ELIcons).forEach(key => {
    app.component(key, ELIcons[key])
})
import { camelCaseToDash } from './utils'
for (const iconName in ELIcons) {
    app.component(`el-icon-${camelCaseToDash(iconName)}`, (ELIcons)[iconName])
}

app.use(pinia)
app.use(router)
app.use(ElementPlus,{size:'small', zIndex:3000})
app.mount('#app')

