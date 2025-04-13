<script setup lang="ts">
import {Files, HomeFilled, Paperclip, UserFilled} from "@element-plus/icons-vue";
import Toolsbar from "@/component/toolsbar/Toolsbar.vue";
</script>

<template>
  <Toolsbar>
    <el-menu-item index="/">
      <template #title>
        <el-icon><HomeFilled /></el-icon> 首页
      </template>
    </el-menu-item>

    <el-menu-item index="/about">
      <template #title>
        <el-icon><UserFilled /></el-icon> 关于
      </template>
    </el-menu-item>

    <el-menu-item index="/friends">
      <template #title>
        <el-icon><Paperclip /></el-icon> 友链
      </template>
    </el-menu-item>

    <el-menu-item index="/archives">
      <template #title>
        <el-icon><Files /></el-icon> 归档
      </template>
    </el-menu-item>
  </Toolsbar>
</template>

<style scoped lang="scss">

</style>