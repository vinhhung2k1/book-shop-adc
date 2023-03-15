<template>
  <div class="flex items-center justify-center">
    <button v-if="show" @click="$emit('delete')" class="px-2 py-1 flex items-center font-medium space-x-2 text-soft-red hover:text-pale-red">
      <img src="@/assets/images/delete.svg"  class="object-cover" />
      <span>Delete</span>
    </button>
    <button v-if="show" @click="$emit('edit')" class="px-2 py-1 flex items-center font-medium space-x-2 text-moderate-blue hover:text-greyish-blue">
      <img src="@/assets/images/edit.svg"  class="object-cover" />
      <span>Edit</span>
    </button>
    <button class="px-2 py-1 flex items-center font-medium space-x-2 text-moderate-blue hover:text-greyish-blue" @click="$emit('reply')" v-else>
      <img src="@/assets/images/reply.svg"  class="object-cover" />
      <span>Reply</span>
    </button>
  </div>
</template>
  
<script lang="ts">
export default {
  props: ['show'],
  emits: ['delete', 'edit', 'reply'],
};
</script>