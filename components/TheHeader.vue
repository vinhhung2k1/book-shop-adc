0<template>
  <div class="l-header sticky top-0 z-50 mx-auto p-3 py-1.5 bg-header w-full md:px-5">
    <div class="flex justify-between text-lg">
      <div class="inline-flex items-center font-medium p-2">
        <div>
          <img fit="cover"  class = "object-cover" src="@/assets/images/logo.png" width="35" height="45" alt="logo" />
        </div>
        <div class="ml-3 md:ml-4 lg:ml-5">
          <NuxtLink to="/"> HungShop </NuxtLink>
        </div>
        <!-- <div class="ml-3 md:ml-5 lg:ml-10">
          <NuxtLink to="/top-love">
            <AppBadge content="Top Love" sub="new" />
          </NuxtLink>
        </div>
        <div class="t-hidden md:block md:ml-7 lg:ml-10">
          <NuxtLink to="/tu-thiet-ke"> Tạo thiết kế </NuxtLink>
        </div>
        <div class="t-hidden md:block ml-3 md:ml-6 lg:ml-10">
          <NuxtLink to="/tro-choi"> Game giảm giá </NuxtLink>
        </div> -->
      </div>
      <div class="inline-flex items-center">
        <div class="mr-2 md:mr-3 lg:mr-4">
          <NuxtLink to="/gio-hang">
            <AppBadge :sub="productAmount">
              <img class = "object-cover" src="@/assets/images/gio-hang.svg" />
            </AppBadge>
          </NuxtLink>
        </div>
        <div class="ml-3 mt-[1px]">
          <img class="md:t-hidden object-cover" src="@/assets/images/menu.svg" @click="onChangeOpenSide" />
          <NuxtLink class="t-hidden md:block" to="/tai-khoan" v-if="isLogin">
            <div class="text-center md:h-8 md:w-8 rounded-full bg-slate-300">t</div>
          </NuxtLink>
          <NuxtLink class="t-hidden md:block" to="/login" v-else>Đăng nhập</NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="isOpenSide" class="side-bar fixed right-0 w-3/4 md:w-1/3 mt-1.5 bg-white h-[100vh] z-40 px-7 py-6 flex flex-col font-medium text-slate-600">
      <div class="text-base leading-6 whitespace-nowrap">
        <!-- <NuxtLink class="flex items-center mt-2" to="/top-love"
          ><span class="border p-0.5 rounded-md"><img  class = "object-cover" src="@/assets/images/logo.png" width="20" height="23" /></span><span class="ml-3">Top love</span></NuxtLink
        >
        <NuxtLink class="flex items-center mt-4" to="/tu-thiet-ke"
          ><span class="border p-0.5 rounded-md"><img  class = "object-cover" src="@/assets/images/logo.png" width="20" height="23" /></span><span class="ml-3">Tự thiết kế</span></NuxtLink
        >
        <NuxtLink class="flex items-center mt-4" to="/tro-choi"
          ><span class="border p-0.5 rounded-md"><img  class = "object-cover" src="@/assets/images/logo.png" width="20" height="23" /></span><span class="ml-3">Game</span></NuxtLink
        > -->
        <NuxtLink class="flex items-center mt-4" to="/tai-khoan"
          ><span class="border p-0.5 rounded-md"><img  class = "object-cover" src="@/assets/images/logo.png" width="20" height="23" /></span><span class="ml-3">Tài khoản</span></NuxtLink
        >
      </div>
    </div>
  </div>
  <div v-if="isOpenSide" @click="isOpenSide = !isOpenSide" class="modal"></div>
</template>
<script lang="ts" setup>
const isOpenSide = ref<boolean>(false);
const onChangeOpenSide = () => {
  console.log(`output->isOpenSide`, isOpenSide.value);
  isOpenSide.value = !isOpenSide.value;
};
watch(isOpenSide, (newVal) => {
  console.log(`output->newVal`, newVal);
  if (newVal) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
});
// san-pham
const productAmount = ref<number>(6);
// login
const isLogin = ref<boolean>(true);
const onClickOutside = () => {};
</script>
<style lang="scss">
</style>
  