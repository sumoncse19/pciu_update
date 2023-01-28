<template>
  <div>
    <h2>About Page</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
      voluptatibus voluptates modi nihil unde dolorum repellendus ab quasi sit
      laborum!
    </p>
    <div>{{ data.message }}</div>
    <div>Start:{{ data.data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=sumon", {
  method: "post",
  body: { age: 25 },
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
