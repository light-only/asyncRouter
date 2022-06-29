<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="defaultRouter"
      text-color="#fff"
      router
      unique-opened
      :collapse="!$store.getters.sidebarType"
  >
    <template v-for="(item,index) in menusList">
      <el-sub-menu :index="(index+1).toString()"  :key="index"  v-if="item.children && item.children.length > 1">
        <template #title >
          <el-icon>
            <component :is="iconList[index]"></component>
          </el-icon>
          <span>{{ item.meta && item.meta.title }}</span>
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
            <span>{{ $t(`menus.${it.path}`)}}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.children[0].path" :key="item.index" @click="savePath(item.children[0].path)">
        <el-tooltip
            class="box-item"
            effect="dark"
            :content="item.children[0].meta.title"
            placement="right"
            offset="32"
        >
          <el-icon>
            <component :is="iconList[index]"></component>
          </el-icon>
        </el-tooltip>
          <span>{{ $t(`menus.${item.children[0].path}`)}}</span>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<script setup>
import { getRouters } from '@/api/menu'
import { ref } from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const iconList = ref(['user','setting','shop','tickets','pie-chart','Bell','checked','chicken','coin']);
const icon = ref(['menu','Edit','Files','folder','fold']);
const defaultRouter = ref(sessionStorage.getItem('path')|| '/tool/build');
const menusList = ref([]);
const store = useStore();
const router = useRouter()
const initMenusList = async () => {
  menusList.value = await getRouters();
  console.log(menusList.value);
}

function savePath(x,y){
  if(x && y){
    sessionStorage.setItem('path',`${x}/${y}`);
  }else{
    router.currentRoute.value.path = '';
    router.push(`/${x}`)
  }
}
initMenusList()
</script>

<style lang="scss">
//::v-deep.el-popper.is-dark{
//  transform: translateX(76px)!important;
//}
</style>

