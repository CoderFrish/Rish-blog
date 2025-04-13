import {createApp} from 'vue'
import App from '@/views/App.vue'
import "@/assets/style/tailwind.css"
import "@/assets/style/global.scss"
import router from '@/router'

import element_plus from 'element-plus'
import "element-plus/dist/index.css"

const element = createApp(App);
element.use(router)
element.use(element_plus)
element.mount('#app')

import type {Article} from "@/types/Article.ts";
import type {Friend} from "@/types/Friend.ts";
export const articles: Map<string, Article> = new Map([
    ['1', {
        title: "Hello World!!",
        created: "2025/2/15 - 14:58",
        updated: "2025/2/15 - 14:58",
        description: "这是我的第一个博客，你好世界，Hello World！！",
        category: "默认",
        cover: "/test/2.jpg",
        tags: ["博客", "文章"],
        author: "Frish2021"
    }]
])

export const friends: Friend[] = [
    {
        title: "Example - 1",
        avatar: "/friends/avatar.png",
        website: "https://www.example.com",
        email: "1@example.com"
    }
]
