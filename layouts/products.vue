<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold text-2xl"
          >Products layouts</NuxtLink
        >
      </nav>
    </header>

    <!-- Output the page content -->
    <div class="h-[90vh] container mx-auto p-4">
      <slot class="" />
    </div>

    <div class="w-full fixed shadow-xl p-2 border border-green-500 bg-white">
      <Footer />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
