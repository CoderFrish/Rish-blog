import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import Home from '@/views/home/Home.vue'
import {ElNotification} from "element-plus";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import("@/views/about/About.vue")
    },
    {
        path: '/friends',
        component: () => import("@/views/friends/Friends.vue")
    },
    {
        path: '/archives',
        component: () => import("@/views/archives/Archives.vue")
    },
    {
        path: '/search',
        component: () => import("@/views/search/Search.vue")
    },
    {
        path: '/article/:id',
        component: () => import("@/views/article/Article.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: () => {
            ElNotification.error({
                message: '访问的页面不存在，已跳转至首页',
                offset: 42,
                duration: 1800,
                showClose: false
            });
            return '/';
        },
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach(() => {
    window.scrollTo(0, 0)
})

export default router
