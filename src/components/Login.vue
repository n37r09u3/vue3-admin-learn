<template>
  <el-button @click="goHome">登录</el-button>
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

<style scoped>

</style>
