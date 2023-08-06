<script setup lang="ts">
const bookStore = useBookStore();
const { state: entries } = bookStore.all();
</script>


<template>
  <bpage>
    <h1>Book Table</h1>
    <code>
      {{ entries }}
    </code>
  </bpage>
</template>
