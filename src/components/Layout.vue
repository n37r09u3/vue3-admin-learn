<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="">
        <span>vue3-admin</span>
      </div>
      <el-menu
          default-active="1-1"
          class="nav-menu"
          router
          background-color="#001529"
          text-color="#fff"
          :collapse="false"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>系统管理</span>
          </template>
            <el-menu-item index="1-1">用户管理</el-menu-item>
            <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">休假管理</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </div>
    <div class="content-right">

      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold"><el-icon><fold /></el-icon></div>
          <div class="bread">面包屑</div>
        </div>
        <div class="user-info">{{userauth.userInfo.userName}}</div>
      </div>
      <div class="wrapper">
        <div class="main">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserAuthStore} from "../store";

const userauth = useUserAuthStore()
</script>
<style scoped lang="scss">
.basic-layout{
  position: relative;
  .nav-side{
    position: fixed;
    width:200px;
    height:100vh;
    background-color: #001529;
    color: white;
    overflow-y: auto;
    transition: width 0.5s;
    .logo{
      display:flex;
      align-items: center;
      font-size: 18px;
      height:50px;
      img{
        margin: 0 15px;
        width:32px;
        height:32px;
      }
    }
    .nav-menu{
      border-right: none;
      //height:calc(100vh - 50px);
    }
  }
  .content-right{
    margin-left: 200px;
    min-width: 600px;
    .nav-top{
      height:50px;
      line-height:50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      .nav-left{
        display:flex;
        align-items: center;

        .menu-fold{
          padding:0 16px;
          cursor:pointer;
          &:hover {
            background: #eee;
          }
        }
        .bread{
          margin-left: 5px;
        }
      }
      .user-info{
        margin-right: 16px;
      }
    }
    .wrapper{
      background: #eef0f3;
      padding:20px;
      height:calc(100vh - 50px);
      .main{
        background: #fff;
        height:100%;
        box-shadow: 0 0 10px 3px #c7c9cb4d;
        min-height:600px
      }
    }
  }
}
</style>
