<template>
  <div class="shadow-sm">
    <Header />
    <div class="bodyHeight" :class="isLoggedIn ? 'flex' : ''">
      <DashBoard v-if="isLoggedIn && route.name !== 'index'" />
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Cookie from "cookie-universal";
const cookies = Cookie();
const isLoggedIn = ref(false);

const isSticky = ref(false);
const route = useRoute();

onMounted(() => {
  isLoggedIn.value = cookies.get("checkLogIn");
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = (event) => {
  window.scrollY > 10 ? (isSticky.value = true) : (isSticky.value = false);
};
</script>

<style lang="scss">
.bodyHeight {
  height: calc(100vh - 75px);
}
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
