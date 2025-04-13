<script setup lang="ts">
import Parallax from "@/component/parallax/Parallax.vue";
import Article from "@/component/article/Article.vue";
import {articles} from "@/main.ts";
import {Document} from "@element-plus/icons-vue";
</script>

<template>
  <Parallax src="/background/home_bg.jpg">
    <template #banner>
      <div class="banner w-full h-full flex items-end justify-center">
        <div class="banner-wrapper w-full h-auto">
          <h1 class="banner-title w-full">Frish2021的博客</h1>
          <span class="banner-subtitle w-full">「不必等风来，跑起来就有气流。」</span>
        </div>
      </div>
    </template>

    <template #default>
      <div class="w-full flex justify-center">
        <div class="articles w-full">
          <el-divider content-position="left">
            <div class="flex items-center">
              <el-icon>
                <Document/>
              </el-icon>
              文章
            </div>
          </el-divider>

          <Article
              v-for="article in articles"
              :title="article[1].title"
              :cover="article[1].cover"
              :category="article[1].category"
              :tags="article[1].tags"
              :author="article[1].author"
              :created="article[1].created"
              :updated="article[1].updated"
              :id="article[0]"
          >
            {{ article[1].description }}
          </Article>

          <el-pagination :hide-on-single-page="true" :pager-count="5" layout="prev, pager, next" :total="1000" class="flex justify-center"/>
        </div>
      </div>
    </template>
  </Parallax>
</template>

<style scoped lang="scss">
.articles {
  max-width: 60em;
  line-height: 30px;

  .el-divider {
    margin-top: 0;
  }
}

.banner-wrapper {
  max-width: 60em;
  padding: 0 1.5em;
  margin: 3rem auto 1.5rem;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, .33);

  .banner-title {
    color: aliceblue;
    font-size: 1.8em;
    font-family: 'ChillKai', serif;
  }

  .banner-subtitle {
    color: aliceblue;
    font-size: 1.2em;
    font-family: '鸿雷行书简体', serif;
  }
}
</style>
