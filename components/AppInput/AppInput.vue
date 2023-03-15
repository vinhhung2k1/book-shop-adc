<template>
  <div class="app-input">
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(e) => updateValue(e.target as HTMLInputElement)"
    />

    <AppButton
      ref="appButtonRef"
      v-if="type === 'password'"
      :class="[
        'app-input__icon',
        inputType === 'password' ? '' : 'app-input__icon--show',
      ]"
      @click="toggleShowPassword()"
    >
      <img src="@/assets/images/icon_eyes.svg" alt="show password" />
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

interface Props {
  modelValue: string;
  placeholder?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
});

const appButtonRef = ref<HTMLButtonElement>();
const inputType = ref(props.type);
const emits = defineEmits(["update:modelValue"]);
const updateValue = (target: HTMLInputElement): void => {
  emits("update:modelValue", target?.value);
};

const toggleShowPassword = (): void => {
  inputType.value = inputType.value === "text" ? "password" : "text";
};
</script>

<style lang="scss" scoped>
@import "./AppInput.scss";
</style>
