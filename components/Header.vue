<template>
  <div>
    <header>
      <nav>
        <ul
          class="flex gap-4 text-white transition-all duration-500 ease-in-out"
          :class="isSticky ? 'w-[350px]' : 'w-[174px]'"
        >
          <li>
            <NuxtLink to="/home">Home</NuxtLink>
          </li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li v-if="isSticky">
            <NuxtLink to="/products" class="btn whitespace-nowrap"
              >All Paper</NuxtLink
            >
          </li>
          <li v-if="isSticky">
            <NuxtLink to="/products/teacher">Mentor</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/signup" class="whitespace-nowrap">Sign Up</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isSticky = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = (event) => {
  window.scrollY > 10 ? (isSticky.value = true) : (isSticky.value = false);
};
</script>

<style lang="scss" scoped></style>
