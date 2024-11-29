<script setup lang="ts">
import { encrypt } from '@/utils/aes'
import { login } from '@/api/user/login'
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { checkPhone, checkPassword, checkEmail } from '@/utils/calibrationRules'

const route = useRoute()
const router = useRouter()

const active = ref('signUp')

const loginFormRef = ref<FormInst | null>(null)
const loginForm = reactive({
  name: '',
  password: ''
})
const loginLoading = ref(false)
const message = useMessage()
const loginRules: FormRules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const submitLogin = () => {
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      loginLoading.value = true
      const params = {
        ...loginForm,
        password: encrypt(loginForm.password)
      }
      login(params)
        .then((response) => {
          loginLoading.value = false
          message.success('登录成功,欢迎回来')

          const useStore = useUserStore()
          useStore.setToken(response.data.token)

          const { redirect } = route.query
          router.push((redirect as string) || '/')
        })
        .catch(() => {
          loginLoading.value = false
        })
    }
  })
}

// 注册
const registerFormRef = ref<FormInst | null>(null)
const registerLoading = ref(false)
const registerForm = ref({
  name: '',
  password: '',
  phone: '',
  email: ''
})

const registerRules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: checkPassword, message: '密码格式不正确', trigger: 'input' }
  ],
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
      validator: checkPhone,
      message: '手机号码格式不正确',
      trigger: 'input'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      validator: checkEmail,
      message: '邮箱格式不正确',
      trigger: 'input'
    }
  ]
}

const submitRegister = () => {
  registerFormRef.value?.validate((errors) => {
    if (!errors) {
      registerLoading.value = true
      const params = {
        ...registerForm.value,
        password: encrypt(registerForm.value.password)
      }
      login(params).then((response) => {
        registerLoading.value = false
        message.success('注册成功,请登录')
        active.value = 'signIn'
      })
    }
  })
}
</script>

<template>
  <div wh-full f-c-c class="bg-content">
    <div
      class="relative w-768 max-w-full min-h-480 bg-white rd-12 card-shadow"
      :class="{ 'right-panel-active': active === 'signIn' }"
    >
      <div class="form-container sign-in-container">
        <n-form
          ref="loginFormRef"
          size="small"
          :show-label="false"
          :model="loginForm"
          :rules="loginRules"
          class="flex-col-c bg-white h-full rounded-10 dark:bg-dark"
        >
          <h1 m-0 class="dark:color-[#fff]">登录</h1>
          <n-space my-20>
            <n-button circle>
              <template #icon>
                <Icon icon="bi:tencent-qq" />
              </template>
            </n-button>
            <n-button circle>
              <template #icon>
                <Icon icon="tabler:brand-wechat" />
              </template>
            </n-button>
            <n-button circle>
              <template #icon>
                <Icon icon="mdi:github" />
              </template> </n-button
          ></n-space>
          <span mb-10 font-size-12 class="dark:color-[#fff]">或者使用你的账号</span>
          <n-form-item path="name" class="w-[80%]">
            <n-input v-model:value="loginForm.name" placeholder="请输入账户名称" />
          </n-form-item>
          <n-form-item path="password" class="w-[80%]">
            <n-input
              v-model:value="loginForm.password"
              :maxlength="12"
              type="password"
              show-password-on="mousedown"
              placeholder="请输入账户密码"
            />
          </n-form-item>
          <n-button
            class="w-[40%] font-bold"
            round
            type="primary"
            :loading="loginLoading"
            @click="submitLogin"
            @keyup.enter="submitLogin"
            >登录
          </n-button>
        </n-form>
      </div>
      <div class="form-container sign-up-container">
        <n-form
          ref="registerFormRef"
          size="small"
          :show-label="false"
          :model="registerForm"
          :rules="registerRules"
          class="flex-col-c bg-white h-full rounded-10 dark:bg-dark"
        >
          <h1 m-0 class="dark:color-[#fff]">注册</h1>
          <n-form-item path="name" class="w-[80%]">
            <n-input v-model:value="registerForm.name" placeholder="请输入账户名称" />
          </n-form-item>
          <n-form-item path="password" class="w-[80%]">
            <n-input
              v-model:value="registerForm.password"
              type="password"
              show-password-on="click"
              placeholder="请输入账户密码"
              :maxlength="12"
            />
          </n-form-item>
          <n-form-item path="phone" class="w-[80%]">
            <n-input v-model:value="registerForm.phone" placeholder="请输入手机号码" />
          </n-form-item>
          <n-form-item path="email" class="w-[80%]">
            <n-input v-model:value="registerForm.email" placeholder="请输入邮箱地址" />
          </n-form-item>
          <n-button
            class="w-[40%] font-bold"
            type="primary"
            :loading="registerLoading"
            @click="submitRegister"
            >注册</n-button
          >
        </n-form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>
              欢迎回来！
              <n-image
                width="48"
                height="48"
                preview-disabled
                src="/public/logo.webp"
                class="b-rd-[50%]"
              />
            </h1>
            <p>要与我们保持练习，请使用您的个人信息登录</p>
            <n-button ghost color="#fff" @click="active = 'signUp'">去登录</n-button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>
              你好朋友！
              <n-image
                width="48"
                height="48"
                preview-disabled
                src="/public/logo.webp"
                class="b-rd-[50%]"
              />
            </h1>
            <p>非常感谢您选择我们！我们将竭诚为您提供最优质、最全面的服务。</p>
            <n-button ghost color="#fff" @click="active = 'signIn'">去注册</n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-content {
  background-image: url('@/assets/svg/bg.svg');
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 3;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 10px 10px 0;
  transition: transform 0.6s ease-in-out;
  animation: toggleRight 0.6s;
  z-index: 100;
}

.right-panel-active .overlay-container {
  border-radius: 10px 0 0 10px;
  transform: translateX(-100%);
  animation: toggleLeft 0.6s;
}

@keyframes toggleRight {
  0%,
  49.99% {
    border-radius: 10px 0 0 10px;
  }
  50%,
  100% {
    border-radius: 0 10px 10px 0;
  }
}

@keyframes toggleLeft {
  0%,
  49.99% {
    border-radius: 0 10px 10px 0;
  }
  50%,
  100% {
    border-radius: 10px 0 0 10px;
  }
}

.overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  color: #fff;
  background: var(--primary-color);
  background: -webkit-linear-gradient(to right, var(--primary-color-pressed), var(--primary-color));
  background: linear-gradient(to right, var(--primary-color-pressed), var(--primary-color));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  transform: translateX(0);
  transform: transform 0.6s ease-in-out;
}

.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>
