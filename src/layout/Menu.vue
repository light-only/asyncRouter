<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="defaultRouter"
      text-color="#fff"
      router
      unique-opened
  >
    <el-sub-menu :index="(index+1).toString()" v-for="(item,index) in menusList" :key="index">
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
          :index= "item.path + '/' + it.path"
          v-for="(it,index) in item.children"
          :key="index"
          @click="savePath(item.path,it.path)"
      >
          <template #title>
            <el-icon>
              <component :is="icon[index]"></component>
            </el-icon>
            <span>{{ it.meta.title }}</span>
          </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getRouters } from '@/api/menu'
import { ref } from 'vue'
const iconList = ref(['user','setting','shop','tickets','pie-chart','Bell','checked','chicken','coin']);
const icon = ref(['menu','Edit','Files','folder','fold']);
const defaultRouter = ref(sessionStorage.getItem('path')|| '/tool/build');
const menusList = ref([]);
const initMenusList = async () => {
  menusList.value = await getRouters()
}

function savePath(x,y){
  console.log(x,y);
  sessionStorage.setItem('path',`${x}/${y}`);
}
initMenusList()
</script>

<style lang="scss" scoped></style>

