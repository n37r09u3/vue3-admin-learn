<template>
<div class="user-manage">
  <div class="query-form">
    <el-form inline :model="user">
      <el-form-item>
        <el-input v-model="user.userId" placeholder="请输入用户ID">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input  v-model="user.userName" placeholder="请输入用户名称">
        </el-input>
      </el-form-item>
      <el-form-item >
        <el-select v-model="user.state" >
          <el-option :value="0" label="所有"></el-option>
          <el-option :value="1" label="在职"></el-option>
          <el-option :value="2" label="离职"></el-option>
          <el-option :value="3" label="试用期"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type='primary'>查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

  </div>

  <div class="base-table">
    <div class="action">
      <el-button type='primary'>新增</el-button>
      <el-button type='danger'>批量删除</el-button>

    </div>
    <el-table :data="userList">
      <el-table-column   width='55'
                      type="selection"
      >
      </el-table-column>

      <el-table-column v-for="col in columns"
        :prop=col.prop
        :label=col.label
        :width=col.width
        >
      </el-table-column>
      <el-table-column
        label="操作"
        width="140"
      >
        <template #default="scope">
          <el-button>编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</div>

</template>
<script setup>
import {ref, onMounted} from 'vue'
const user = ref({})
const userList = ref([{
  userId:11111
}])
const columns = ref([
  {
    label:"用户ID",
    prop: 'userId'
  },
  {
    label:"用户名",
    prop: 'userName'
  },
  {
    label:"用户邮箱",
    prop: 'userEmail'
  },
  {
    label:"用户角色",
    prop: 'role'
  },
  {
    label:"用户状态",
    prop: 'state'
  },
  {
    label:"注册时间",
    prop: 'createTime'
  },
  {
    label:"最后登录时间",
    prop: 'lastLoginTime'
  },
])
onMounted(()=>{


})
</script>


<style scoped lang="scss">

</style>
