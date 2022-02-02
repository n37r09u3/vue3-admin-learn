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

app.use(router)
app.use(ElementPlus)
app.mount('#app')

