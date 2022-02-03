<template>

  <div class="login-wrapper">
    <!--    <el-button @click="goHome">登录</el-button>-->
    <div class="box">

      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">系统后台</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="user" v-model="user.userName">
          </el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="Lock" v-model="user.userPwd">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="doLogin">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
    <p class="footer">copyright</p>
  </div>


</template>


<script setup>
import {useRouter} from 'vue-router'

import {ref} from 'vue'

const user = ref({
  userName: '',
  userPwd: '',
})
const userForm = ref()
const rules = {
  userName: [
    {
      required: true, message: "请输入用户名", tigger: "blur"
    }
  ],
  userPwd:
      [
        {
          required: true, message: "请输入密码", tigger: "blur"
        }
      ]

}

import api from "../api";
import {useUserAuthStore} from "../store";

const router = useRouter()
const userauth = useUserAuthStore()
const doLogin = () => {
  userForm.value.validate((valid) => {
    if (valid) {
      userauth.login(user.value).then(res => {
        router.push('/welcome')
      }).catch(err => {
        reject(err)
      })
      // api.login(user.value).then(res =>{
      //   console.log(res)
      //   router.push('/welcome')
      // })
    }
  })


}
</script>


<style scoped lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;

  .box {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;

    .title {
      text-align: center;
      line-height: 1.5;
      font-size: 50px;
      margin-bottom: 30px;
    }

    .btn-login {
      width: 100%;
    }

  }

  .footer {
    margin-top: 10px;
  }
}
</style>
