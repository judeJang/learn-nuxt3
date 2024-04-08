<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">about</div>
      <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p>
      <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://youtube.com">유튜브 </RouterLink>
        <q-space />
        <NuxtLink to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://youtube.com">유튜브 </NuxtLink>
      </div>
    </div>
    <base-bottom-button />
    <BaseBottomButton />
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
