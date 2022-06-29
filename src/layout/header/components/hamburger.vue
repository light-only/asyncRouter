<template>
  <div class="ham-content" @click="handleClick">
    <el-icon color="#000" v-if="icon"><IconHomeJiHua/></el-icon>
    <el-icon color="#000" v-else><IconHomeClose /></el-icon>
  </div>
</template>

<script setup>
import {computed} from "vue";
import IconHomeJiHua from '~icons/home/shouqi';
import IconHomeClose from '~icons/home/zhankai';
import {useStore} from "vuex";
const store = useStore();
const handleClick = ()=>{
  store.commit('CHANGE_SIDEBAR_TYPE');
}
const icon = computed(()=>{
  return store.getters.sidebarType == true ? true:false
})
</script>

<style lang="scss" scoped>
.ham-content{
  margin: 0 15px;
  font-size: 22px;
  & ::v-deep .el-icon{
    vertical-align: -4px;
  }
}
</style>