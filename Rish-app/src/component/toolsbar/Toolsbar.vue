<script setup lang="ts">
import {Expand, Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import login from '@/assets/images/login.png'
import {useRoute} from "vue-router";
import {search} from "@/utils/SearchUtils.ts";

const collapse = ref(false)
const toggleCollapse = () => {
  collapse.value = !collapse.value
}

const loginModal = ref(false)
const toggleLoginModal = () => {
  loginModal.value = !loginModal.value
}

const registerModal = ref(false)
const toggleRegisterModal = () => {
  registerModal.value = !registerModal.value
}

const search_input = ref('')
const password = ref('')
</script>

<template>
  <el-dialog v-model="loginModal" title="登录" width="330px">
    <div class="login w-full h-full">
      <el-text>账号</el-text>
      <el-input placeholder="请输入账号名或者邮箱."/>
      <el-text>密码</el-text>
      <el-input v-model="password" placeholder="请输入账号密码" type="password"/>

      <el-text>验证码</el-text>
      <div class="login-captcha w-full flex">
        <el-input placeholder="请输入右图验证码."/>
        <el-image/>
      </div>

      <el-radio :value="false">记住我</el-radio>
    </div>

    <template #footer>
      <el-button @click="void(0)">忘记密码？</el-button>
      <el-button type="primary" @click="void(0)">登录</el-button>
    </template>
  </el-dialog>

  <el-dialog v-model="registerModal" title="注册" width="330px">
    <div class="register w-full h-full">
      <el-text>账号</el-text>
      <el-input placeholder="请输入账号用户名."/>
      <el-input placeholder="请输入账号邮箱."/>
      <el-text>密码</el-text>
      <el-input placeholder="请输入账号密码" type="password"/>
      <el-input placeholder="请再次输入账号密码" type="password"/>

      <el-text>验证码</el-text>
      <div class="register-captcha w-full flex">
        <el-input placeholder="请输入邮箱验证码."/>
        <el-button>获取验证码</el-button>
      </div>

      <div class="register-captcha w-full flex">
        <el-input placeholder="请输入右图验证码."/>
        <el-image/>
      </div>
    </div>

    <template #footer>
      <el-button type="primary" @click="void(0)">注册</el-button>
    </template>
  </el-dialog>

  <div class="toolsbar flex items-center">
    <div class="toolsbar-default-item toolsbar-more-item flex items-center justify-center" @click="toggleCollapse">
      <el-icon>
        <Expand/>
      </el-icon>
    </div>

    <div style="flex-grow: 1;"/>

    <el-dropdown>
      <div class="toolsbar-default-item flex items-center justify-center">
        <el-avatar :size="30" :src="login"/>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="toggleLoginModal">Login</el-dropdown-item>
          <el-dropdown-item @click="toggleRegisterModal">Register</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <el-drawer
      v-model="collapse"
      direction="ltr"
      size="306px"
      title="菜单"
  >
    <el-container>
      <el-header>
        <div class="author-info">
          <div class="author-avatar flex items-center justify-center">
            <el-avatar :size="80" src="/frish.png"/>
          </div>

          <div class="author-name flex items-center justify-center">
            <el-text>Frish2021</el-text>
          </div>
        </div>
      </el-header>

      <el-main>
        <el-divider>
          <el-text>搜索</el-text>
        </el-divider>

        <el-input placeholder="搜索文章" v-model="search_input" @keydown.enter="search(search_input)"
                  clearable>
          <template #prefix>
            <el-icon>
              <Search/>
            </el-icon>
          </template>
        </el-input>

        <el-divider>
          <el-text>导航菜单</el-text>
        </el-divider>

        <el-menu
            class="el-menu-vertical"
            :default-active="useRoute().path"
            router
        >
          <slot/>
        </el-menu>
      </el-main>
    </el-container>
  </el-drawer>
</template>

<style scoped lang="scss">
@use "@/assets/style/mixin";

.register {
  .el-input {
    margin-bottom: 12px;
  }

  .register-captcha {
    $image_width: 100px;

    .el-input {
      width: calc(100% - $image_width);
    }

    .el-image, .el-button {
      width: $image_width;
      margin-left: 5px;
      height: 32px;
    }

    .el-image:hover {
      cursor: pointer;
    }
  }
}

.login {
  .el-input {
    margin-bottom: 12px;
  }

  .login-captcha {
    $image_width: 100px;

    .el-input {
      width: calc(100% - $image_width);
    }

    .el-image {
      width: $image_width;
      margin-left: 5px;
      height: 32px;
    }

    .el-image:hover {
      cursor: pointer;
    }
  }
}

.el-container {
  .el-divider {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

.el-header {
  height: 115px;
}

.el-main {
  padding-top: 0;
}

.author-info {
  display: flex;
  flex-wrap: wrap;

  .author-avatar {
    width: 100%;
    height: 90px;
  }

  .author-name {
    width: 100%;
    height: fit-content;
  }
}

.el-menu-vertical {
  border: none;
}

.toolsbar {
  width: 100%;
  height: 50px;

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .1);
  background-color: rgba(240, 248, 255, 0.14);
  position: fixed;
  z-index: 1;
  @include mixin.backdrop-blur(8px);

  :deep(.el-tooltip__trigger:focus-visible) {
    cursor: pointer;
    outline: unset;
  }
}

.toolsbar-default-item {
  min-width: 60px;
  font-size: 1.25em;
  height: 48px;
  color: rgba(0, 0, 0, 0.9);
  padding: 0 20px;
}

.toolsbar-more-item:hover {
  cursor: pointer;
}
</style>
