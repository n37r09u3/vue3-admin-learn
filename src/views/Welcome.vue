<template>
<div class="welcome">
  <div class="content">
    <div class="sub-title">欢迎体验</div>
    <div class="title">vue3后台管理系统</div>
    <div class="desc">Vue 3 + Vite + Pinia + ElementPlus admin后台</div>
  </div>
  <div class="img">

  </div>

</div>
</template>
<script setup>

</script>
<style scoped lang="scss">


.welcome {
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  background: #fff;
  box-shadow: 0 0 10px 3px #c7c9cb4d;
  min-height: 500px;
  .content {
    position: relative;
    bottom:40px;
    .sub-title{
      font-size:30px;
      line-height:42px;
      color:#333;
    }
    .title{
      font-size:40px;
      line-height:62px;
      color:#409eff;
    }

    .desc{
      text-align: right;
      font-size:14px;
      color:#999;
    }

  }
  .img{
    background-image: url('./../assets/images/welcome.png');
    width:371px;
    height:438px;
    margin-left:100px;
  }
}
</style>
