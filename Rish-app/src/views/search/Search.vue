<script setup lang="ts">
import {Document, Search as SearchIcon} from '@element-plus/icons-vue'
import {ref} from "vue";
import {useRoute} from "vue-router";
import {search} from "@/utils/SearchUtils.ts";
import {articles} from "@/main.ts";
import Article from "@/component/search/Article.vue";

const search_input = ref(useRoute().query.q)
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="articles w-full h-[150px] flex items-end justify-center">
      <div class="space w-[330px]">
        <el-input size="large" clearable v-model="search_input" @keydown.enter="search(<string>search_input)"
                  placeholder="请输入关键词搜索."/>
      </div>

      <div class="space">
        <el-button type="primary" size="large" @click="search(<string>search_input)">
          <template #icon>
            <el-icon>
              <SearchIcon/>
            </el-icon>
          </template>
          搜索
        </el-button>
      </div>
    </div>
  </div>

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
          :category="article[1].category"
          :tags="article[1].tags"
          :author="article[1].author"
          :created="article[1].created"
          :updated="article[1].updated"
          :id="article[0]"
      >
        {{ article[1].description }}
      </Article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.space {
  margin: 30px 5px;
}

.articles {
  padding: 0 30px;
  max-width: 60em;
  line-height: 30px;

  .el-divider {
    margin-top: 0;
  }
}
</style>
