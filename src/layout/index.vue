<template>
  <el-container class="app-wrapper" >
      <el-aside :width="asideWidth" class="sidebar-container">
        <div style="text-align:center;margin-top: 15px;color: #FFFFFF;width: 100%;height: 80px">
          <el-icon><Avatar /></el-icon><div v-if="$store.getters.sidebarType" style="margin-left: 10px">后台管理系统</div>
        </div>
        <Menu />
      </el-aside>
      <el-container class="container" :class="{hidderContainer:!$store.getters.sidebarType}">
        <el-header class="header-container">
          <Header/>
        </el-header>
        <el-main style="background: #fff;margin: 0 15px">
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
import {computed, ref} from 'vue'
import Header from './header/index'
import {useStore} from "vuex";
const store = useStore();

const asideWidth = computed(()=>{
  return store.getters.sidebarType === true? '180px' : '67px'
})
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
    height: 50px;
    line-height: 50px;
    background: #fff;
    margin-bottom: 15px;
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

