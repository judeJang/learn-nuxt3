<template>
  <div class="flex flex-center column window-height text-center">
    <div class="text-h1">{{ error.statusCode }}</div>
    <p class="q-my-lg text-subtitle1">{{ error.message }}</p>
    <div class="text-h6">error props</div>
    <p class="text-subtitle2">
      {{ JSON.stringify(error) }}
    </p>

    <div class="text-h1">{{ globalError.statusCode }}</div>
    <p class="q-my-lg text-subtitle1">{{ globalError.message }}</p>
    <div class="text-h6">global error props</div>
    <p class="text-subtitle2">
      {{ JSON.stringify(globalError) }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const globalError: Maybe<NuxtError> = useError();
console.log(globalError.message);
</script>

<style scoped></style>
