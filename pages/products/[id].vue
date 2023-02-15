<template>
  <div>
    <Head>
      <Title>NUXT | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
import { PRODUCTS } from "~/constant/urls";

const { id } = useRoute().params;
const singleProduct = PRODUCTS + id;
const { data: product } = await useFetch(singleProduct);

// const { data: product } = await useFetch(singleProduct, {key: id}); // --> This line means if the previous line is not work properly the we should use this line, and it'll check every time when id will be changed

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

// fatal: true, => It's used for if we use a unknown route then the error page will be occurred

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
