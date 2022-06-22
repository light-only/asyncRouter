<template>
  <div class="demo-type">
    <div>
      <el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="layout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
  </div>
</template>
<script setup>
import { UserFilled } from '@element-plus/icons-vue'
import {useStore} from "vuex";
const store = useStore();
const layout = ()=>{
  store.dispatch('LayOut');
}
</script>

<style lang='scss' scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>