// https://nuxt.com/docs/api/configuration/nuxt-config
// https://github.com/ryan-ahn/npm-nuxt3-starter/blob/main/nuxt.config.ts
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false, // vscode 확장팩 관련 설정
    typeCheck: true, // 타입체크 관련 설정
  },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    /* */
  },
  css: ['@/assets/scss/service_mobile.scss'],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
});
