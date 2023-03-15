<template>

  <div class="p-3 md:p-6">
    <!-- <TopPage /> -->
    <div>
      <button @click="handleSubmit" class="block shadow text-xs md:text-sm py-1.5 px-5 bg-slate-200 hover:bg-slate-100 focus:shadow-outline focus:outline-none text-gray-800 rounded"> Trang chủ</button>
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
