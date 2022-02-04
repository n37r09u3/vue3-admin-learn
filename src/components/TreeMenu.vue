<template>
  <template v-for="menu in data">
        <el-sub-menu v-if="menu.children && menu.children.length > 0 &&menu.children[0].menuType == 1" :index="menu.path">
          <template #title>
            <el-icon>
              <component :is="menu.icon"></component>
            </el-icon>
            <span>{{menu.menuName}}</span>
          </template>
          <tree-menu :data="menu.children"/>
        </el-sub-menu>
        <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path">{{menu.menuName}}</el-menu-item>
    </template>
</template>

<script setup>
import {ref, onMounted} from 'vue'
let props = defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>
<style scoped lang="scss">

</style>
