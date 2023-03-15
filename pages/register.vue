<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col px-8 py-12 md:p-12">
    <h2 class="text-4xl font-bold mb-2">Đăng ký</h2>
    <p class="text-md mb-8">
      Nếu đã có tài khoản,
      <NuxtLink to="/login" class="text-blue-700 hover:underline">
        đăng nhập ngay
      </NuxtLink>
    </p>

    <AppInput v-model="email" :placeholder="'Email của bạn'" class="mb-4" />

    <AppInput v-model="username" :placeholder="'Tên đăng nhập'" class="mb-4" />

    <AppInput
      v-model="password"
      :type="'password'"
      :placeholder="'Mật khẩu'"
      class="mb-4"
    />

    <AppInput
      v-model="confirmPassword"
      :type="'password'"
      :placeholder="'Xác nhận mật khẩu'"
      class="mb-6"
    />

    <AppButton
      @click="handleSubmit"
      class-style="app-btn--lg app-btn--primary mb-6"
    >
      Đăng ký
    </AppButton>

    <p class="text-center text-neutral-400 mb-4">Hoặc đăng ký bằng</p>

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

<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "login-layout",
});

const email = ref<string>("");
const username = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const handleSubmit = (): void => {};
</script>

<style scoped></style>
