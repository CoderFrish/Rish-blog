import {ElMessage} from "element-plus";

export const search = (text: string) => {
    if (/^\s*$/.test(text)) {
        ElMessage({
            message: '搜索内容不允许为空或者空格。',
            type: 'warning',
        })
    } else {
        jump("/search?q=" + text.trim())
    }
}

export const jump = (link: String) => {
    window.location.href = link as string
}
