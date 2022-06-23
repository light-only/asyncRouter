<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadCrumbList" key="index">
      <span v-if="index===breadCrumbList.length - 1" class="noRedirect">{{item.name}}</span>
      <span v-else class="redirect" @click="handleRedirect(item.path)">{{item.name}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import {watch,ref} from "vue";
const breadCrumbList = ref([]);
const route = useRoute();
const router = useRouter();
console.log(route.matched);
const initBreadCrumb = ()=>{
  breadCrumbList.value = route.matched;
}
watch(route,()=>{
  initBreadCrumb();
},{deep:true,immediate:true});

const handleRedirect = (path)=>{
  router.push(path);
}
</script>

<style lang='scss' scoped>
.noRedirect{
  color: #97a8be;
  cursor: text;
}
.redirect{
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    color: $menuBg;
  }
}
</style>
