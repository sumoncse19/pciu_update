<template>
  <div>This is from home</div>
</template>

<script setup>
import Cookie from "cookie-universal";
const cookies = Cookie();

onMounted(() => {
  const isAccountActive = cookies.get("accountActive");
  const isLoggedIn = cookies.get("checkLogIn");
  const checkUserRole = cookies.get("userRole");
  // if ((!isAccountActive || !isLoggedIn) && checkUserRole !== "Admin") {
  //   alert("Your account is not active");
  //   navigateTo("/");
  //   setTimeout(() => {
  //     location.reload();
  //   }, 500);
  // }
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 18px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
