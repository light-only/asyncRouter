<template>

  <el-container class="contanier_box">
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 头部下面的内容 -->
    <el-container>
      <!-- 侧边导航 -->
      <el-aside width='205px'
                class="sliber_box">
        <Sliber></Sliber>
      </el-aside>
      <!-- 主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import Sliber from './components/sliber.vue'
import Header from './components/header.vue'
export default {
  components: {
    Sliber,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>