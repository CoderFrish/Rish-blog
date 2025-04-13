<script setup lang="ts">
import {computed} from 'vue'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
const offsetY = computed(() => y.value * .3)

defineProps({
  src: String
})
</script>

<template>
  <div class="parallax_img w-full absolute z-[-1]"
       :style="{ transform: `translateY(${offsetY}px)`, backgroundImage: `url(${src})`}"/>
  <div class="parallax w-full h-auto absolute">
    <div class="parallax_empty w-full">
      <slot name="banner"/>
    </div>
    <div class="parallax_content w-full bg-white">
      <slot name="default"/>
    </div>

    <el-footer>
      <div class="w-full h-full flex justify-center items-center">
        <el-text>&copy; Rish-blog All rights reserved.</el-text>
      </div>
    </el-footer>
  </div>
</template>

<style scoped lang="scss">
$h-bg: calc(100vh / 1.4);
.parallax {
  transform-style: preserve-3d;

  .parallax_empty {
    height: $h-bg;
  }

  .parallax_content {
    box-shadow: 0 -20px 30px rgba(0, 0, 0, 0.1);
    padding: 35px 30px 10px 30px;
  }
}

.parallax_img {
  height: $h-bg;
  background: no-repeat center 18%/cover;
}
</style>
