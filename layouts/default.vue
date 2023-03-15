<template>
  <TheHeader />

  <main class="min-h-[calc(100vh-16rem)] mt-[3.5rem] l-main">
    <slot />
  </main>
  <SocialGroup />
  <TheFooter />
</template>

<script setup lang="ts"></script>

<style scoped></style>
