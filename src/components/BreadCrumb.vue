<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadList" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import {ref, onMounted} from 'vue'
let props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

import {useRoute} from 'vue-router'
const route = useRoute()
const breadList = ref(route.matched)

</script>
<style scoped lang="scss">

</style>
