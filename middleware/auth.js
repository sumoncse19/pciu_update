// export default defineNuxtRouteMiddleware((to, from) => {
//   const setAuth = useState("user");
//   console.log(setAuth.value, "from auth");
//   if (!setAuth.value?.email) {
//     window.user = "";
//     process.client && alert("Sorry, you need to fill your username");
//     return navigateTo("/");
//   } else {
//     console.log("else");
//     alert("got it");
//     window.user = setAuth.value;
//     console.log(window);
//     console.log(window.user);
//   }
// });
