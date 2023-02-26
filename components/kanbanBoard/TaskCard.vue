<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>

      <img
        class="w-6 h-6 rounded-full ml-3"
        src="https://www.outsideonline.com/wp-content/uploads/2021/07/gravel-bike-beard-tats_h.jpg?crop=16:9&width=960&enable=upscale&quality=100"
        alt="Avatar"
      />
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <TaskBadge v-if="task.type" :color="badgeColor">{{
        task.type
      }}</TaskBadge>
    </div>
  </div>
</template>

<script setup>
import TaskBadge from "./TaskBadge.vue";

const props = defineProps({
  task: {
    type: Object,
    default: () => ({}),
  },
});

// const badgeColor = computed(() => {
//   const mappings = {
//     Design: "purple",
//     "Feature Request": "teal",
//     Backend: "blue",
//     QA: "green",
//     default: "teal",
//   };
//   return mappings[this.task.type] || mappings.default;
// });
</script>

<style lang="scss" scoped></style>
