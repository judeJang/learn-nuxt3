<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header
            >강의 로드맵 {{ $hello('nuxt couding') }}</q-item-label
          >
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>
            <!-- 
            <NuxtLink to="/course/prefetching-1">prefeching1 1</NuxtLink>
            <NuxtLink to="/course/prefetching-2">prefeching1 2</NuxtLink>
            <NuxtLink to="/course/prefetching-3">prefeching1 3</NuxtLink>

            <q-item to="/course/prefetching-1">prefeching1</q-item>
            <q-item to="/course/prefetching-2">prefeching2</q-item>
            <q-item to="/course/prefetching-3">prefeching3</q-item> 
            -->
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <NuxtPage />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>
