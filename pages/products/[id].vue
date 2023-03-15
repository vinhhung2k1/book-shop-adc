<template>
  <div class="p-3 md:p-6 lg:p-10">
    <!-- <TopPage /> -->
    <div>
      <button @click="handleSubmit" class="block shadow text-xs md:text-sm py-1.5 px-5 bg-slate-200 hover:bg-slate-100 focus:shadow-outline focus:outline-none text-gray-800 rounded"> Trang chủ</button>
    </div>
    <div class="grid lg:grid-cols-7 gap-2 md:gap-5 lg:gap-7 xl:gap-10 min-h-[400px]">
      <div class="col-span-3 border">
        <!-- <img>g> -->
        <img src="@/assets/images/book1.png" class="object-cover mx-auto h-full" />
      </div>
      <div class="col-span-4 border">
        <!-- <img>g> -->
          chi tiet
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
// definePageMeta({
//   layout: 'products',
// });

// data alias products
// const { data: products } = await useFetch('https://fakestoreapi.com/products');
const handleSubmit = () => {
  router.push({path:'/'})
};
</script>

<style scoped></style>
