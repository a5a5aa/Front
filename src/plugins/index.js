/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from './router'
import pinia from './pinia'
import { useUserStore } from '@/stores/user'
import VImageInput from 'vue3-img-input'
import '@/styles/main.sass'

export async function registerPlugins (app) {
  loadFonts()
  app.use(pinia)
  // 初始完 pinia 後先getUser
  await useUserStore().getUser()
  app.use(router)
  app.use(vuetify)
  app.component('VImageInput', VImageInput)
}
