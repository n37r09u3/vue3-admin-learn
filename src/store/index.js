import { defineStore } from 'pinia'
import api from '../api'
import storage from '../utils/storage'

export const TOKEN = 'token'
export const USERINFO = 'userinfo'


export const useUserAuthStore = defineStore('userauth', {
    state: () => ({
        token: storage.getItem(TOKEN) || '',
        userInfo: storage.getItem(USERINFO) || {}
    }),
    getters: {
        hasUserInfo (state) {
            return JSON.stringify(this.userInfo) !== '{}'
        }
    },
    actions: {
        login (userInfo) {
            const { userName, userPwd } = userInfo
            return new Promise((resolve, reject) => {
                api.login({
                    userName,
                    userPwd
                })
                    .then(data => {
                        console.log(data)
                        this.token = data.token
                        this.userInfo = data
                        storage.setItem(USERINFO, data)
                        storage.setItem(TOKEN, data.token)
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        async getUserInfo (context) {
            const res = await getUserInfo()
            this.userInfo = res
            return res
        },
        logout () {
            storage.clearItem(TOKEN)
            storage.clearItem(USERINFO)
            this.$reset()
        }
    }
})
