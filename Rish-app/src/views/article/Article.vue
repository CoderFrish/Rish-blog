<script setup lang="ts">
import {useRoute} from "vue-router";
import Parallax from "@/component/parallax/Parallax.vue";
import {articles} from "@/main.ts";

const articleId = useRoute().params.id as string
const article = articles.get(articleId)

import "md-editor-v3/lib/preview.css"
import {ref} from "vue";
import {MdPreview} from "md-editor-v3";

const markdown = ref(`
## 你好世界
这是我的第一个博客.
> Hello World!!!

\`\`\`python
def hello():
  print("Hello World!!!")

hello()
\`\`\`

\`\`\`java [id:java]
public class hello {
  public static void hello() {
    System.out.println("Hello World!!!");
  }

  public static void main(String[] args) {
    hello();
  }
}
\`\`\`

\`\`\`kotlin [id:kotlin]
fun hello() {
  println("Hello World!!!")
}

fun main() {
  hello()
}
\`\`\`

### 图片测试
![test](/background/home_bg.jpg)

### 数学公式测试
$(x+y)^2=x^2+2xy+y^2$
$(a+b)(a-b)=a^2-b^2$
`);
</script>

<template>
  <Parallax :src="article.cover">
    <template #banner>
      <div class="banner w-full h-full flex items-end justify-center">
        <div class="banner-wrapper w-full h-auto">
          <div class="w-full h-full">
            <div class="banner-title"><el-text># {{ article.title }}</el-text></div>
            <div class="w-full flex flex-wrap gap-2 items-center">
              <div class="w-full flex flex-wrap gap-2 items-center">
                <el-tag>创建于：{{ article.created }}</el-tag>
                <el-tag>更新于：{{ article.updated }}</el-tag>
                <el-tag>作者：{{ article.author }}</el-tag>
              </div>

              <div class="w-full flex flex-wrap gap-2 items-center">
                <el-tag>点赞：0</el-tag>
                <el-tag>字数：0</el-tag>
                <el-tag>评论：0</el-tag>
                <el-tag>分类：{{ article.category }}</el-tag>
                <el-tag v-for="tag in article.tags">{{ tag }}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #default>
      <div class="w-full flex justify-center">
        <div class="content w-full">
          <MdPreview v-model="markdown" previewTheme="github" :codeFoldable="false" :noImgZoomIn="false"/>
        </div>
      </div>
    </template>
  </Parallax>
</template>

<style scoped lang="scss">
.banner-wrapper {
  max-width: 60em;
  padding: 0 1.5em;
  margin-bottom: 1.2em;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, .33);

  .banner-title {
    .el-text {
      color: aliceblue;
      font-size: 1.8em;
      font-family: 'ChillKai', serif;
    }
  }
}

.content {
  max-width: 60em;
  line-height: 30px;
}
</style>
