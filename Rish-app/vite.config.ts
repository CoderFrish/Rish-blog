import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from 'vite-plugin-html';
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), createHtmlPlugin({
        inject: {
            data: {
                title: 'Frish2021的博客'
            }
        },
    }), tailwindcss()],
    server: {
        host: '0.0.0.0',
        port: 80
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
})
