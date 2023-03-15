// https://nuxt.com/docs/api/configuration/nuxt-config
// import {quasar} from '@quasar/vite-plugin';
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@pinia/nuxt"],
  // components: {
    // global: true,
  //   dirs: ['~/components',]
  // },
  app: {
    head: {
      title: "ShopChow",
      meta: [
        {
          name: "description",
          content: "Shop chow",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
        },
      ],
    },
  },
  css: ['@/assets/style/style.scss','ant-design-vue/dist/antd.css','@quasar/extras/material-icons/material-icons.css', 'quasar/src/css/index.sass'],
  tailwindcss: {
    cssPath: '@/assets/vendor/tailwind.css',
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/abstracts/_variables.scss" as *;'
        }
      }
    },
    // plugins: [
    //   quasar({
    //     sassVariables: 'assets/vendor/quasar-variables.sass'
    //   })
    // ]
  },
  image: {
    dir: 'assets/images'
  },
});
