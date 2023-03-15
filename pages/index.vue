<template>
  <section class=" p-3 md:p-6">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-x-2 gap-y-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
      <ProductItemLT />
    </div>
    <!-- <p>{{ $myPlugin() }}</p> -->
    <!-- <div>
      <ChatBox />
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '@/stores/counter';
import ChatBox from '@/components/Comments/ChatBox.vue';

const counter = useCounter();
</script>

<style scoped></style>
