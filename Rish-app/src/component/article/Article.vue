<script setup lang="ts">
import {Folder} from "@element-plus/icons-vue";
import {computed, type PropType} from "vue";
import {useWindowSize} from '@vueuse/core'
import {jump} from "@/utils/SearchUtils.ts";

defineProps({
  category: String,
  tags: Array as PropType<string[]>,
  title: String,
  updated: String,
  created: String,
  author: String,
  cover: String,
  id: String
})

const isMedia = computed(() => {
  return useWindowSize().width.value < 857
})
</script>

<template>
  <div class="article w-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] p-6"
       :style="{height: isMedia ? '540px' : '280px'}">
    <el-container class="h-full">
      <el-aside width="290px" v-if="!isMedia" class="flex items-center justify-center">
        <div class="article-cover h-[260px] w-[270px]" :style="{ backgroundImage: `url(${cover})` }"/>
      </el-aside>

      <el-container>
        <div class="article-cover-media" :style="{ backgroundImage: `url(${cover})` }" v-if="isMedia"/>

        <el-header>
          <div class="article-title w-full h-full flex flex-wrap items-end">
            <div class="w-full">
              <h1 @click="jump(`/article/${id}`)">{{ title }}</h1>
              <span>发布于: {{ created }} | 更新于: {{ updated }} | 作者: {{ author }}</span>
            </div>
          </div>
        </el-header>

        <el-main>
          <div class="article-description w-full h-full">
            <el-text class="article-description-content">
              <slot name="default"/>
            </el-text>
          </div>
        </el-main>

        <el-footer height="70px">
          <div class="article-category">
            <div class="w-full flex items-center">
              <el-text><el-icon><Folder /></el-icon> 归档于: {{ category }}</el-text>
            </div>

            <div>
              <div class="flex gap-2 items-center">
                <el-text>标签:</el-text>
                <el-tag type="primary" size="small" v-for="tag in tags">{{ tag }}</el-tag>
              </div>
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-main {
  padding: 0 20px 0 20px !important;
}

.el-header {
  height: 70px;
  margin-bottom: 10px;
}

.article-category {
  line-height: 28px;
}

$rounded: 7px;
.article {
  margin-bottom: 25px;
  border-radius: $rounded;

  .article-title {
    line-height: 25px;

    h1 {
      width: fit-content;
      font-size: 1.5em;
      margin: 3px 0;
    }

    h1:hover {
      text-decoration-line: underline;
      text-underline-offset: 2px;
      cursor: pointer;
      color: var(--el-color-primary);
    }

    span {
      color: var(--el-text-color-regular);
      font-size: .8em;
    }

    span, h1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.article-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: $rounded;
}

.article-cover-media {
  margin: 10px 10px 0 10px;
  width: calc(100% - 20px);
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: $rounded;
}

.article-description {
  font-size: .9em;
  line-height: 24.9px;

  $line-clamp: 5;
  .article-description-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $line-clamp;
    line-clamp: $line-clamp;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
