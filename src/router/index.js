import {createRouter,createWebHashHistory} from "vue-router";
import Layout from "../components/Layout.vue"  //需要vue结尾
import Welcome from "../views/Welcome.vue"

const routes =[
    {
        name: 'home',
        path: '/',
        component: Layout,
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
                name: 'user',
                path: '/system/user',
                meta:{
                    title:'用户管理'
                },
                component: ()=>import('./../views/User.vue'),
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta:{
            title:'登录'
        },
        component: ()=>import('./../views/Login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
