<template>
  <q-card class="my-card">
    <img :src="thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
/* 런타임 기반 선언 */
// defineProps({
//   thumbnail: {
//     type: String,
//     default: '',
//   },
//   title: String,
//   subtitle: String,
// });

// defineEmits(['click']);

/* 타입기반 선언 */
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}
defineProps<Props>();
defineEmits<{
  click: []; // 파라메터가 없어서 if 있으면 [msg:string]
}>();
</script>
