import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
const app = createApp(App)
console.log('env=>',import.meta.env)
import config from './config'
axios.post(config.mockApi+'/login').then(function(response) {
    console.log(response)
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')

