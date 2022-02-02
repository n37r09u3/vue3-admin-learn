/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/5707fc1b97008f67471c7f4f3b43eb81/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
    }
}
export default {
    env,
    mock:true,
    namespace:'manager',
    ...EnvConfig[env]
}
