<template>
  <div class="nav">
    <hamburger/>
    <bread-crumb/>
    <div class="nav-right">
      <screenful style="margin-right: 20px"/>
      <avatar/>
    </div>
  </div>
</template>

<script setup>
import Hamburger from './components/hamburger'
import BreadCrumb from "./components/breadCrumb";
import avatar from './components/avatar'
import Screenful from "./components/screenful";
// 自定义图标


</script>

<style lang="scss" scoped>
.nav{
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

  }
}

</style>


