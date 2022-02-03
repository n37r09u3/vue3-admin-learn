<template>
<h1>welcome</h1>
<p>{{userauth.userInfo.userName}}</p>
<router-link to="/login">去登录</router-link>

</template>
<script setup>
import {useUserAuthStore} from "../store";

const userauth = useUserAuthStore()
</script>
<style scoped>

</style>
