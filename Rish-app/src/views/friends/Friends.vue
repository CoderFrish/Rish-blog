<script setup lang="ts">
import Parallax from "@/component/parallax/Parallax.vue";
import Friend from "@/component/friend/Friend.vue";
import {friends} from "@/main.ts";
</script>

<template>
  <Parallax src="/background/friends_bg.jpg">
    <template #default>
      <div class="w-full flex justify-center">
        <div class="friends w-full">
          <h1 class="friends-title"># Frish2021的网友们</h1>
          <div class="friends-description">
            <el-text>
              「海内存知己，天涯若比邻。 -- 王勃《送杜少府之任蜀州》」
            </el-text>
          </div>
          <el-divider/>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Friend v-for="friend in friends" :title="friend.title" :avatar="friend.avatar" :email="friend.email"
                    :website="friend.website"/>
          </div>
        </div>
      </div>
    </template>
  </Parallax>
</template>

<style scoped lang="scss">
.friend {
  padding: 10px;
}

.friends {
  max-width: 60em;
  line-height: 30px;

  .el-divider {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .friends-description {
    margin: 10px;
  }

  .friends-title {
    font-size: 2em;
  }
}
</style>
