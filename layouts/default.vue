<template>
  <div class="shadow-sm">
    <nav
      class="w-full py-4 px-8 flex justify-between fixed z-1"
      :class="
        isSticky || route.name !== 'index' ? 'bg-ash-dark shadow-2xl' : ''
      "
    >
      <NuxtLink to="/" class="font-bold text-2xl text-yellow-primary">
        <img
          :src="mainLogo"
          class="transition-all duration-500 ease-in-out"
          :class="
            isSticky || route.name !== 'index'
              ? 'h-[40px] w-[30px]'
              : 'h-[200px] w-[160px]'
          "
          alt=""
          srcset=""
        />
      </NuxtLink>
      <Header />
    </nav>

    <!-- Output the page content -->
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import mainLogo from "~/static/images/landing/pciu_logo.png";

const isSticky = ref(false);
const route = useRoute();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = (event) => {
  window.scrollY > 10 ? (isSticky.value = true) : (isSticky.value = false);
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #e4801d;
}
html {
  scroll-behavior: smooth;
  @apply scroll;
}

.scroll {
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-color: #e4801d #ececec; /* Firefox 64 */
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px #ECECEC;
    background: #e4801d;
    border-radius: 3px;
    background: #ececec;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e4801d;
    border-radius: 3px;
  }
}
</style>
