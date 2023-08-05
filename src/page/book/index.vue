<script setup lang="ts">
const bookStore = useBookStore();
const { state: entries } = bookStore.all();
</script>


<template>
  <h1>Book Table</h1>
  <code>
    {{ entries }}
  </code>
</template>
