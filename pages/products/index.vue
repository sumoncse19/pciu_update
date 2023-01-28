<template>
  <di>
    <h2>This is products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-12">
      <div v-for="(product, index) in products" :key="index" class="card">
        <ProductCard :product="product" />
        <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
      </div>
    </div>
  </di>
</template>

<script setup>
import { PRODUCTS } from "~/constant/urls";
definePageMeta({
  layout: "products",
});

// fetch the products
const { data: products } = await useFetch(PRODUCTS);

useHead({
  title: "NUXT | Product",
  meta: [
    {
      name: "description",
      content: "This is from Product page",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
