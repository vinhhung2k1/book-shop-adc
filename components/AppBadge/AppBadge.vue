<template>
  <div class="relative h-[28px] w-fit">
    <div class="text-lg">{{ content }}<slot></slot></div>
    <div v-if="sub" class="top-[-20%] right-[-30%] bg-red-500 min-h-[18px] min-w-[18px] absolute px-1 py-0.5 text-white rounded-full leading-[12px] border text-[12px] text-center content-center">{{ sub }}</div>
  </div>
</template>
    
<script setup lang='ts'>
const props = defineProps({
  content: {
    type: [String, Number],
  },
  sub: {
    type: [String, Number],
  },
});
</script>
    
<style>
</style>