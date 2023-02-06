export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    const cookie = useCookie("session");
    cookie.value = "lkadfjlkjalkfj";
    const res = await fetch("http://localhost:3000/api/checkAuthStatus", {
      method: "POST",
      body: JSON.stringify({ sessionCookie: cookie.value }),
    });

    const data = await res.json();

    if (data.statusCode === 401) {
      return navigateTo("/login");
      console.log("data", data);
    }
  }
});
