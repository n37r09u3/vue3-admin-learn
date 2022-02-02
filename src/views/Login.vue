<template>

  <div class="login-wrapper">
<!--    <el-button @click="goHome">登录</el-button>-->
      <div class="box">

        <el-form>
          <div class="title">系统后台</div>
          <el-form-item>
            <el-input type="text" prefix-icon="user" >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password"   prefix-icon="Lock">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn-login">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    <p class="footer">copyright</p>
  </div>


</template>

<!--<script setup>-->
<!--import {useRouter} from 'vue-router'-->
<!--const router = useRouter()-->
<!--const goHome = ()=>{-->
<!--  router.push('/')-->
<!--}-->
<!--</script>-->

<script>
export default {
  name:'login',
  mounted(){
    this.$request({
      method: 'POST',
      url: '/login',
      data:{
        name: 'jack'
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.login-wrapper{
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color: #f9fcff;
  width:100vw;
  height:100vh;
  .box{
    width:500px;
    padding:50px;
    background-color: #fff;
    border-radius:4px;
    box-shadow:0 0 10px 3px #c7c9cb4d;
    .title{
      text-align: center;
      line-height:1.5;
      font-size: 50px;
      margin-bottom: 30px;
    }
    .btn-login{
      width:100%;
    }

  }
  .footer{
    margin-top: 10px;
  }
}
</style>
