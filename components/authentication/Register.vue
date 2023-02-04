<template>
  <!-- component -->
  <!-- <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <form
        ref="form"
        v-on:submit="handleRegisters"
        class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
      >
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          :v-model="email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          @click="handleRegister"
        >
          Create Account
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </form>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <a class="no-underline border-b border-blue text-blue" href="../login/">
          Log in </a
        >.
      </div>
    </div>
  </div> -->
  <div class="mt-[200px]">
    <h1>Create an account</h1>
    <p>
      <input type="text" name="" id="" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        v-model="password"
      />
    </p>
    <p><input type="text" name="" id="" placeholder="Name" v-model="name" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click.native="signInWithGoogle">Google</button></p>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRoute } from "vue-router";

const { auth } = useFirebaseClient();

// onMounted(() => {
//   createUserWithEmailAndPassword(auth, "ami@gmail.com", "123456").then(
//     (user) => {
//       console.log(user);
//     }
//   );
// });

const name = ref("");
const email = ref("");
const password = ref("");

const register = () => {
  console.log("here");
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      console.log("Successfully Registered!", user);
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  alert("google");
  console.log("google");
};
</script>

<style lang="scss" scoped></style>
