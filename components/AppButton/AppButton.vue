<template>
  <button @click="emits('click')" class="app-btn" :class="classStyle">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  classStyle?: string;
}

withDefaults(defineProps<Props>(), {
  classStyle: "",
});

const emits = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@import "./AppButton.scss";
</style>
