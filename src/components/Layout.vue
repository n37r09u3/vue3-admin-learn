<template>
  <div class="basic-layout">
    <div :class="['nav-side',isCollapse?'fold':'unfold']">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="">
        <span>vue3-admin</span>
      </div>
      <el-menu
          :default-active="activeMenu"
          class="nav-menu"
          router
          background-color="#001529"
          text-color="#fff"
          :collapse="isCollapse"
      >
        <tree-menu :data="userMenu" />
      </el-menu>
    </div>
    <div :class="['content-right',isCollapse?'fold':'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle">
            <el-icon class="icon">
              <fold/>
            </el-icon>
          </div>
          <div class="bread">
            <bread-crumb/>
          </div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="noticeCount>0" class="notice">
            <el-icon>
              <bell/>
            </el-icon>
          </el-badge>
          <el-dropdown>
          <span class="user-link">
            {{ userauth.userInfo.userName }}
            <el-icon class="el-icon--right">
              <arrow-down/>
            </el-icon>
          </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>{{ userauth.userInfo.userEmail }}</el-dropdown-item>
                <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserAuthStore} from "../store";
import {useRouter,useRoute} from 'vue-router'
import {ref, onMounted} from 'vue'
import TreeMenu from "./TreeMenu.vue";
import BreadCrumb from "./BreadCrumb.vue";
const router = useRouter()
const route = useRoute()
const isCollapse = ref(false)
const activeMenu = ref(route.fullPath)
const userauth = useUserAuthStore()


const toggle =() =>{
  isCollapse.value = !isCollapse.value
}
const logout =() =>{
  userauth.logout()
  router.push('/login')
}

import api from "../api";

const noticeCount = ref(0)
const getNoticeCount = async () =>{
  try {
    const count = await api.getNoticeCount()
    noticeCount.value = count
  }catch (e)
  {
    console.error(e)
  }

}
const userMenu = ref([])
const getMenuList = async() =>{
  try {
    const menu = await api.getMenuList()
    console.log(menu)
    userMenu.value = menu
  }catch (e)
  {
    console.error(e)
  }
}
onMounted(()=>{
  getNoticeCount()
  getMenuList()
})


</script>
<style scoped lang="scss">
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: white;
    transition: width 0.5s;
    overflow: hidden;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;

      img {
        margin: 0 18px;
        width: 32px;
        height: 32px;
      }
    }

    .nav-menu {
      border-right: none;
      height: calc(100vh - 50px);
      overflow-y: auto;
      overflow-x: hidden;
    }
    &.fold{
      width:64px
    }
    &.unfold{
      width:200px
    }
  }

  .content-right {
    margin-left: 200px;
    min-width: 960px;
    &.fold{
      margin-left: 64px;
    }
    &.unfold{
      margin-left: 200px;
    }
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          padding: 0 16px;
          cursor: pointer;
          margin-bottom: 1px;
          &:hover {
            background-color: #eee;
          }
          .icon{
            position: relative;
            top: 1px;
          }
        }
        .bread {
          margin-left: 5px;

        }
      }

      .user-info {
        margin-right: 16px;
        display: flex;
        align-items: center;
        .notice {
          line-height: 30px;
          margin-right: 15px;
          margin-top: 5px;
          cursor: pointer;
        }
        .user-link{
          line-height: 30px;
          cursor: pointer;
        }
      }
    }

    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      min-height: 500px;
    }
  }
}
</style>
