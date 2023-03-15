<template>
  <div class="mx-auto max-w-screen-xl p-7 text-center">
    <h1 class="text-7xl font-bold">{{ error.statusCode }}</h1>
    <p class="mt-7 text-6xl">Oops.</p>
    <p class="mt-7">{{ error.message }}</p>

    <button
      class="btn inline-flex items-center justify-center"
      @click="handlerClearError()"
    >
      <span class="material-symbols-rounded mr-2"> arrow_back </span>
      Go back home
    </button>
  </div>
</template>

<script setup>
const { error } = defineProps(["error"]);

const handlerClearError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
