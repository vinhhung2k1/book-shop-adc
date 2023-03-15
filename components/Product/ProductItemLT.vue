<script setup lang="ts">
import MerchandiseStatus from './MerchandiseStatus.vue';
type ProductState = {
  pid: string;
  pname: string;
  brand: string;
  price: number;
  pdesc: string;
  thumbnail: string;
  pic: string;
  quantity: number;
};
// const sortedProducts = products.sort((a, b) => {
//   if (a.pname < b.pname) {
//     return -1;
//   }
//   if (a.pname > b.pname) {
//     return 1;
//   }
//   return 0;
// });
const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};
const removeProduct = (pid: string) => {
  // const query = 'http://' + config.apiServer + ':' + config.port + '/api/cart/del/' + pid + '/' + accId.value;
  // axios.get(query);
  location.reload();
};
const discountType = ref<string | number>(1); //giam tien 2 giam %
// const tacgia = ref('Nguyễn đình trường');
// const isNew = ref(true);
const clotheType = ref(2); // 1 ban 2 moi dang

const toLink = ref('products/1'); // 1 ban 2 moi dang
const props = defineProps({
  discountType: {
    type: [String, Number],
    default: 1,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <article class="rounded-xl bg-white p-3 md:p-3 shadow-lg lg:hover:shadow-xl lg:hover:transform lg:hover:scale-105 duration-300">

    <NuxtLink :to="toLink">
      <div class="relative flex max-h-52">
        <div class="absolute top-0 left-[-1px]">
          <MerchandiseStatus :merchandiseStatus="clotheType" :merchandise-quantity="1" />
        </div>
        <div class="absolute top-0.5 right-[-1px]">
          <div v-if="isNew" class="text-[11px] md:text-[12px] font-medium min-h-[18px] min-w-[18px] bg-red-500 px-1 py-0.5 text-white rounded-full leading-[11px] border text-center">new</div>
        </div>
        <img src="@/assets/images/book1.png" class="object-cover mx-auto img-product" />
      </div>

      <div class="p-1 md:p-2">
        <p class="text-slate-700 uppercase text-sm md:text-base font-medium mb-0.5">Stephen Chow</p>
        <div class="mt-1 flex justify-between items-center">
          <span class="text-sm md:text-base font-semibold">{{ formatMoney(300000) }}</span>
          <span v-if="discountType == 1" class="text-[13px] md:text-sm line-through text-red-500">{{ formatMoney(300000) }}</span>
          <span v-if="discountType == 2" class="text-[13px] md:text-sm line-through text-red-500">giam 30%</span>
        </div>
        <p class="mt-2.5 text-[11px] d-webkit-box text-slate-400 overflow-hidden text-ellipsis">Đoạn giới thiệu sơ qua. Dài quá thì see more. dĐoạn giới thiệu sơ qua. Dài quá thì see more...</p>
        <div class="flex gap-x-0.5 md:gap-x-2 mt-2.5 justify-between" style="margin-right: -1px; margin-left: -1px;">
          <div v-if="clotheType == 1" class="flex gap-x-2 self-center">
            <img class="img-small" @click="" src="@/assets/images/anh-1-beau.jpg" width="25" height="25" />
            <img class="img-small" @click="" src="@/assets/images/anh-1-beau.jpg" width="25" height="25" />
            <img class="img-small" @click="" src="@/assets/images/anh-1-beau.jpg" width="25" height="25" />
          </div>
          <!-- <div v-if="clotheType == 2" class="flex items-center">
            <img class="mr-1 w-3 md:w-5 md:mr-4" src="@/assets/images/tagia-icon.svg" alt="tacgia" />
            <span class="text-[10.5px] md:text-xs text-gray-400 capitalize text-ellipsis max-w-[96px] overflow-hidden whitespace-nowrap">{{ tacgia }}</span>
          </div> -->
          <!-- <div v-if="clotheType == 2" class="flex items-center">
            <span class="flex h-0.5 w-0.5 md:h-3 md:w-3 mr-1 md:mr-2 p-2.5 md:p-3.5 border-solid border-cyan-300 items-center border justify-center rounded-full text-xs text-white content-center">
              <img class="max-w-[12px] md:max-w-[18px]" src="@/assets/images/thumb-up.svg" alt="tacgia" />
            </span>
            <span class="text-[11px] md:text-xs text-cyan-500 leading-[11px]">10</span>
          </div> -->
        </div>
        <!-- <div v-if="clotheType == 1" class="mt-2.5 flex items-center">
          <img class="mr-2 md:mr-4" src="@/assets/images/tagia-icon.svg" alt="tacgia" />
          <span class="text-[11px] md:text-xs text-gray-400 capitalize">{{ tacgia }}</span>
        </div> -->
        <!-- <div class="mt-2">
          <q-rating v-model="model" max="5" size="1em" color="yellow" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming readonly />
          <span class="ml-3 text-xs text-gray-500">{{model  }}</span>
        </div> -->
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped></style>