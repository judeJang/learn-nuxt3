<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <slot name="header">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>Vue & Nuxt admin Mastery Admin</q-toolbar-title>
          <q-separator dark vertical />
          <NuxtLink v-slot="{ navigate }" custom to="/admin/override-layout">
            <q-btn
              stretch
              flat
              label="Override-layout"
              no-caps
              @click="navigate"
            />
          </NuxtLink>
          <q-separator dark vertical />
          <NuxtLink v-slot="{ navigate }" custom to="/admin/dynamic-layout">
            <q-btn
              stretch
              flat
              label="Dynamic-layout"
              no-caps
              @click="navigate"
            />
          </NuxtLink>
          <q-separator dark vertical />
          <NuxtLink v-slot="{ navigate }" custom to="/">
            <q-btn stretch flat label="Home" no-caps @click="navigate()" />
          </NuxtLink>
        </q-toolbar>
      </q-header>
      <q-page-container :style="pageContainerStyle">
        <slot></slot>
      </q-page-container>
    </slot>
  </q-layout>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
</script>
