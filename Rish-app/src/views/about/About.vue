<script setup lang="ts">
import Parallax from "@/component/parallax/Parallax.vue";
import {MdPreview} from 'md-editor-v3'
import "md-editor-v3/lib/preview.css"
import {ref} from "vue";

const markdown = ref(`
# Hello Im\`Frish2021👋
Im a student from guangdong china.
I often wrote a little code.

\`\`\`python
print("Hello World!!")
\`\`\`

## Top languages
![Top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=CoderFrish&layout=compact&locale=cn)

## Stats
[![GitHub stats](https://github-readme-stats.vercel.app/api?username=CoderFrish&show_icons=true&locale=cn)](https://github.com/CoderFrish)
`)
</script>

<template>
  <Parallax src="/background/about_bg.jpg">
    <template #banner>
      <div class="banner w-full h-full flex items-end justify-center">
        <div class="banner-wrapper w-full h-auto">
          <h1 class="banner-title"># 关于我</h1>
          <div class="banner-updated">
            <el-text>最后更新：2025/2/15 - 16:05</el-text>
          </div>
        </div>
      </div>
    </template>

    <template #default>
      <div class="w-full flex justify-center">
        <div class="content w-full">
          <MdPreview v-model="markdown" previewTheme="github" :codeFoldable="false"/>
        </div>
      </div>
    </template>
  </Parallax>
</template>

<style scoped lang="scss">
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

  .banner-updated {
    .el-text {
      color: aliceblue;
      font-size: .9em;
    }
  }
}

.content {
  max-width: 60em;
  line-height: 30px;
}
</style>
