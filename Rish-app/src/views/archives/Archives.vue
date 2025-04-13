<script setup lang="ts">
import Parallax from "@/component/parallax/Parallax.vue";
import {articles} from "@/main.ts";
import {jump} from "@/utils/SearchUtils.ts";
</script>

<template>
  <Parallax src="/background/archives_bg.jpg">
    <template #default>
      <div class="w-full flex justify-center">
        <div class="archives w-full">
          <h1 class="archives-title"># 文章归档</h1>
          <el-divider/>
          <div class="archives-box">
            <h1 class="archive-title">2025</h1>

            <ul class="archive-group">
              <li v-for="article in articles"><p @click="jump(`/article/${article[0]}`)">{{ article[1].title }}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </Parallax>
</template>

<style scoped lang="scss">
.archives-box {
  width: 100%;
  padding: 20px;

  .archive-group {
    list-style: inherit;
    padding: 15px 30px;

    p {
      width: fit-content;
      color: var(--el-color-primary);
    }

    p:hover {
      text-decoration-line: underline;
      text-underline-offset: 2px;
      cursor: pointer;
    }
  }

  .archive-title {
    font-size: 2.3em;
    margin-bottom: 15px;
  }
}

.archives {
  max-width: 60em;
  line-height: 30px;

  .el-divider {
    margin-bottom: 15px;
  }

  .archives-title {
    font-size: 2em;
  }
}
</style>
