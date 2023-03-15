import * as components from 'quasar';
import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin((nuxtApp) => {
  const quasarUserOptions = {

    components,
    ptugins: {}
  }
  nuxtApp.vueApp.use(components.Quasar, quasarUserOptions)
})