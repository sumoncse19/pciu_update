<template>
  <div>
    <nav
      class="w-full py-4 px-8 flex justify-between z-1 bg-ash-dark"
      :class="
        (isSticky || route.name !== 'index' ? 'bg-ash-dark shadow-2xl' : '',
        isSticky ? 'fixed' : '')
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
      <header>
        <nav>
          <ul
            class="flex gap-4 text-white transition-all duration-500 ease-in-out"
            :class="isSticky ? 'w-[400px]' : 'w-[210px]'"
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
            <li v-if="!isLoggedIn">
              <NuxtLink to="/signup" class="whitespace-nowrap"
                >Sign Up</NuxtLink
              >
            </li>
            <li>
              <button
                v-if="isLoggedIn"
                @click="handleLogOut"
                class="whitespace-nowrap cursor-pointer"
              >
                Log Out
              </button>

              <NuxtLink v-else to="/login" class="whitespace-nowrap"
                >Log In</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  </div>
</template>

<script setup>
import mainLogo from "~/static/images/landing/pciu_logo.png";
import Cookie from "cookie-universal";
const isSticky = ref(false);
const cookies = Cookie();
const route = useRoute();

const isLoggedIn = ref(false);

onMounted(() => {
  isLoggedIn.value = cookies.get("checkLogIn");
  console.log(isLoggedIn.value, "check login");
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = (event) => {
  window.scrollY > 10 ? (isSticky.value = true) : (isSticky.value = false);
};

const handleLogOut = () => {
  cookies.removeAll();
  navigateTo("/login");
  setTimeout(() => {
    location.reload();
  }, 500);
};
</script>

<style lang="scss" scoped></style>
