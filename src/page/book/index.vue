<script setup lang="ts">
const bookStore = useBookStore();
const { execute: loadBooks, state: entries } = bookStore.all();

onBeforeMount(() => {
  loadBooks();
});
</script>


<template>
  <h1>Book Table</h1>
  <code>
    {{ entries  }}
  </code>
</template>
