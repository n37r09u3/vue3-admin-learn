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
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
