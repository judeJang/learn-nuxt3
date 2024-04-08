<template>
  <div class="q-pa-md">
    <div class="qu-my-xl text-center q-gutter-md">
      <q-btn
        label="default layout"
        color="dark"
        @click="changePageLayout('custom')"
      />
      <q-btn
        label="admin layout"
        color="dark"
        @click="changePageLayout('admin')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//  type Layout = 'default' | 'custom' | 'admin'; or
import type { LayoutKey } from '#build/types/layouts';

const changePageLayout = (layout: LayoutKey) => {
  setPageLayout(layout);
};
definePageMeta({
  layout: false,
});
</script>

<style scoped></style>
