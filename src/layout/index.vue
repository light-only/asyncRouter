<template>
  <el-container class="app-wrapper" >
      <el-aside width="200px" class="sidebar-container">
        <div style="text-align:center;margin-top: 20px;color: #FFFFFF;width: 100%;height: 80px">
          <el-icon><Avatar /></el-icon><div style="margin-left: 10px">后台管理系统</div>
        </div>
        <Menu />
      </el-aside>
      <el-container class="container">
        <el-header class="header-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item
            ><a href="/">promotion management</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main style="background: #fff">
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
</script>


<style lang="scss" scoped>
.app-wrapper{
  width: 100vw;
  height:100vh;
  background: #f5f5f5;
  margin: unset;
}
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  .header-container{
    background: #fff;
    margin-bottom: 15px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    ::v-deep .el-breadcrumb{
      line-height: unset;
    }
  }
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
::v-deep .el-sub-menu .el-menu-item{
  min-width: unset;
}

.el-aside {
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none; /* Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
}
</style>

