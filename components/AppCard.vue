<template>
  <q-card class="card">
    <q-card-section v-if="$slots.header" class="card__header">
      <slot name="header"></slot>
    </q-card-section>

    <q-card-section class="card__body">
      <slot></slot>
    </q-card-section>

    <q-separator />

    <q-card-actions v-if="$slots.footer" class="card__footer">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
// 런타임 선언
// defineProps({
//   title: {
//     type: String,
//     default: 'Hello',
//   },
// });

/* 타입기반 선언 종류 */

// 제네릭 선언 (직관적)꺽쇠 괄호
// defineProps<{ type: string }>();

// interface
// interface Props {
//   title?: string; // 필수 값이 아닌 선택적
// }
// const props = defineProps<Props>();

// 타입 기반 선언은 기본값을 설정할 수 가 없다 그래서 withDefaults 라는 컴파일러 매크로를 사용하여 해결

interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.card__header {
  padding: 32px 32px 0px 32px;
}
.card__body {
  padding: 32px;
}
.card__footer {
  padding: 16px 32px 16px 32px;
}
</style>
