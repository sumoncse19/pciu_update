<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div
        ref="form"
        class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
      >
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <input
          v-model="name"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
        />

        <input
          v-model="pciuId"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="pciuId"
          placeholder="Your ID"
        />

        <label for="role">Sign Up As:</label>
        <select class="form-control" v-model="role">
          <option v-for="role in roles" :value="role.val" :key="role.id">
            {{ role.val }}
          </option>
        </select>

        <input
          v-model="role"
          placeholder=","
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
        />

        <label v-if="role === 'Student'" for="superVisorName"
          >Your Supervisor Name:</label
        >
        <select
          v-if="role === 'Student'"
          class="form-control"
          v-model="superVisorName"
        >
          <option
            v-for="superVisor in superVisors"
            :value="superVisor.val"
            :key="superVisor.id"
          >
            {{ superVisor.val }}
          </option>
        </select>
        <input
          v-if="role === 'Student'"
          v-model="superVisorName"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="superVisorName"
          placeholder="Your SuperVisor Name"
        />

        <input
          v-if="role === 'Student'"
          v-model="superVisorMail"
          type="email"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="superVisorMail"
          placeholder="Your SuperVisor Mail"
        />

        <input
          v-model="email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Enter Your Email Address"
        />

        <input
          v-model="password"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          v-model="confirmPassword"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        />

        <!-- type="submit" -->
        <button
          class="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-dark focus:outline-none my-1"
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
      </div>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <a class="no-underline border-b border-blue text-blue" href="/login">
          Log in </a
        >.
      </div>
    </div>
  </div>
</template>

<script setup>
import Cookie from "cookie-universal";

const cookies = Cookie();

const name = ref("");
const pciuId = ref("CSE ");
const roles = ref({
  1: { id: 1, val: "Student" },
  2: { id: 2, val: "Teacher" },
  3: { id: 3, val: "Admin" },
  4: { id: 4, val: "Authority" },
});
const superVisors = ref({
  1: { id: 1, val: "Umma Saima Rahman" },
  2: { id: 2, val: "Morshad Rana" },
  3: { id: 3, val: "Taofica Amreen" },
  4: { id: 4, val: "Sowmitra Das" },
});
const role = ref("Student");
const superVisorName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const superVisorMail = ref("");

const user = ref(null);

const handleRegister = () => {
  if (password.value === confirmPassword.value) {
    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        pciuId: pciuId.value,
        role: role.value,
        superVisorMail: superVisorMail.value,
        email: email.value,
        password: password.value,
        isActive: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.response);
        if (data.insertedId) {
          console.log(data, "here registered data");
          cookies.set("userInfo", data);
          cookies.set("accessToken", data.accessToken);
          cookies.set("userName", data.name);
          cookies.set("userEmail", data.email);
          cookies.set("accountActive", data.isActive);
          cookies.set("userRole", data.role);
          cookies.set("checkLogIn", data.isLoggedIn);
          navigateTo("/home");
        }
      });
  } else {
    alert("Your password is not match.");
  }
};
</script>

<style lang="scss" scoped></style>
