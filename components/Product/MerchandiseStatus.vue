<template>
  <div class="bg-slate-900 text-[11px] rounded-md px-2.5 py-0 :md-0.5 md:pt-1 text-white font-medium bg-opacity-30 md:text-[13px]">
    <span v-if="merchandiseStatus == 0">Het hang </span>
    <span v-if="merchandiseStatus == 1">Đã bán {{ merchandiseQuantity > 0 ? merchandiseQuantity + 'c' : 'hết' }} </span>
    <span v-if="merchandiseStatus == 2">Chua len san </span>
  </div>
</template>
<script lang="ts" setup>
// type merchandiseStatus = number;
// type merchandiseQuantity = number;
// interface Props {
//   msg?: string
//   labels?: string[]
// }s

interface Props {
  merchandiseStatus: number;
  merchandiseQuantity: number;
}

withDefaults(defineProps<Props>(), {
  merchandiseStatus: 1,
  merchandiseQuantity: 0,
});
</script>