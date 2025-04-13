<script setup lang="ts">
import {Message} from "@element-plus/icons-vue";

defineProps({
  website: String,
  avatar: String,
  title: String,
  email: String
})
</script>

<template>
  <div class="friend h-[100px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] p-6 flex items-center">
    <el-container>
      <el-aside class="flex items-center justify-center" width="75px">
        <el-avatar :size="50" :src="avatar" />
      </el-aside>

      <el-main>
        <div class="w-full h-auto">
          <el-link :underline="false" :href="website" >{{ title }}</el-link>
        </div>

        <div class="w-full h-auto">
          <el-text><el-icon><Message /></el-icon>邮箱: </el-text><el-link :underline="false" :href="`mailto://${email}`">{{ email }}</el-link>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-main {
  padding: 0 10px !important;
}

$rounded: 7px;
.friend {
  padding: 15px;
  border-radius: $rounded;

  .friend-description {
    line-height: 20px;
  }
}
</style>
