<template>
  <NuxtLayout>
    <!-- :name="layout" -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import type { LayoutKey } from '#build/types/layouts';
const layout: LayoutKey = 'custom';
</script>
