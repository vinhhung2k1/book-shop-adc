<template>
  <div class="score-input">
    <button @click="$emit('score-changed', val + 1)">
      <img src="@/assets/images/plus.svg"  class="object-cover" />
    </button>
    <div>
      {{ val }}
    </div>
    <button @click="$emit('score-changed', val - 1)">
      <img src="@/assets/images/minus.svg"  class="object-cover" />
    </button>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'ScoreInput',
  emits: ['score-changed'],
  props: {
    value: Number,
  },
  data() {
    return {
      val: this.$props.value || 0,
    };
  },
  watch: {
    value(val) {
      this.val = val;
    },
  },
};
</script>