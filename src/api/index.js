import request from "../utils/request";

export default {
    login(params){
         return request({
             url:'/users/login',
             method: 'POST',
             data: params
         })
    },
    getNoticeCount(){
        return request({
            url:'/leave/count',
            method: 'get',
            data: {}
        })
    },
    getMenuList(params){
        return request({
            url:'/menu/list',
            method: 'get',
            data: {}
        })
    },
}
