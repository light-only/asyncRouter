<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse">
    <sidebarItem :routes=routes></sidebarItem>
  </el-menu>
</template>

<script setup>
import sidebarItem from './sidebarItem.vue'
import {reactive,ref} from "vue";
import {useStore} from "vuex";
const isCollapse = ref(false);
const store = useStore();

const routes = ref([]);
function getRoutes(){
  routes.value = store.getters.sidebarRouters;
}
getRoutes();
</script>
