<template>
  <div class="menu-wrapper" v-for="(item,index) in routes" index="item.path || item.name" key="index">
    <el-sub-menu v-if="!item.hidden&&item.children">
      <template #title >
        <el-icon><location /></el-icon>
        <span>{{item.meta && item.meta.title}}</span>
      </template>
      <el-menu-item-group>
        <router-link v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
          <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
            <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
</style>
