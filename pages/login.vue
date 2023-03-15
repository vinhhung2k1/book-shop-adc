<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col px-8 py-12 md:p-12">
    <h2 class="text-4xl font-bold mb-2">Đăng nhập</h2>
    <p class="text-md mb-8">
      Nếu chưa có tài khoản, bạn có thể
      <NuxtLink to="/register" class="text-blue-700 hover:underline">
        tạo ở đây
      </NuxtLink>
    </p>
    <AppInput
      v-model="username"
      :placeholder="'Tên đăng nhập hoặc email'"
      class="mb-10"
    />

    <AppInput
      v-model="password"
      :type="'password'"
      :placeholder="'Mật khẩu'"
      class="mb-4"
    />

    <p class="text-right mb-8">
      <NuxtLink to="/" class="text-neutral-400">Quên mật khẩu?</NuxtLink>
    </p>

    <AppButton
      @click="handleSubmit"
      class-style="app-btn--lg app-btn--primary mb-6"
    >
      Đăng nhập
    </AppButton>

    <p class="text-center text-neutral-400 mb-4">Hoặc đăng nhập cùng</p>

    <div class="flex justify-center">
      <AppButton class="mr-4">
        <img
          src="@/assets/images/icon_facebook.svg"
          alt="login with facebook"
        />
      </AppButton>

      <AppButton>
        <img src="@/assets/images/icon_google.svg" alt="login with google" />
      </AppButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

definePageMeta({
  layout: "login-layout",
});

const username = ref<string>("");
const password = ref<string>("");

const handleSubmit = (): void => {};
</script>

<style lang="scss" scoped></style>
