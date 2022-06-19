<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import sidebar from './components/sidebar'
import AppMain from './components/AppMain'
</script>