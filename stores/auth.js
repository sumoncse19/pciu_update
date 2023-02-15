// const state = () => ({
//   auth: "",
// });

// const getters = {
//   getCurrentAuth(state) {
//     return state.auth;
//   },
// };

// const mutations = {
//   SET_AUTH(state, payload) {
//     console.log(payload, "payload");
//     state.auth = payload;
//   },
// };

// import { defineStore } from "pinia";

// export const useAuth = defineStore("auth", {
//   state: () => {
//     return {
//       userInfo: {
//         isLogin: false,
//       },
//     };
//   },
//   actions: {
//     setUserInfo(payload) {
//       console.log(payload, "pinia");
//       this.userInfo = payload;
//     },
//   },
// });
