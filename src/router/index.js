import {createRouter,createWebHashHistory} from "vue-router";
import Home from "../components/Home.vue"  //需要vue结尾
import Welcome from "../components/Welcome.vue"  //需要vue结尾
import Login from "../components/Login.vue"  //需要vue结尾

const routes =[
    {
        name: 'home',
        path: '/',
        component: Home,
        meta:{
            title:'首页'
        },
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta:{
                    title:'欢迎'
                },
                component: Welcome,
            },
            {
                name: 'login',
                path: '/login',
                meta:{
                    title:'登录'
                },
                component: Login,
            },
        ]

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
