<template>
  <NuxtLayout>
    <!-- :name="layout" -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
// import type { LayoutKey } from '#build/types/layouts';
// const layout: LayoutKey = 'custom';

const nuxtApp = useNuxtApp();
console.log('nuxtApp', nuxtApp);

// vue application instance
// nuxtApp.vueApp.component();
// nuxtApp.vueApp.directive();
// nuxtApp.vueApp.use();

// provide 활용
// nuxtApp.provide('hello', (msg: string) => `Hellow ${msg}`);
</script>
