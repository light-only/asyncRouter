<template>
  <div @click="handleScreen" style="font-size: 20px">
    <el-tooltip content="点击全屏" placement="bottom"  v-if="screenType" >
      <el-icon   color="#000" style="vertical-align: -4px"><IconHomeScreen/></el-icon>
    </el-tooltip>
    <el-tooltip content="退出全屏" placement="bottom"  v-else>
      <el-icon  color="#000" style="vertical-align: -4px"><IconHomeScreenShrink/></el-icon>
    </el-tooltip>

  </div>
</template>
<script setup>
import IconHomeScreen from '~icons/home/screenful';
import IconHomeScreenShrink from '~icons/home/fullscreen-shrink'
import screenfull from 'screenfull';
import {ref} from 'vue'

const screenType = ref(true);
const handleScreen = ()=>{
  if (screenfull.isEnabled) {
    screenfull.toggle();
    screenType.value = !screenType.value
  }
}
</script>

<style lang='scss' scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
::v-deep el-icon el-tooltip__trigger{
  font-size: 20px!important;
}
</style>