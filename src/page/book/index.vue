<script setup lang="ts">
const http = useHttp();

const { execute: loadBooks, state: entries } = useAsyncState(async () => {
  const res = await http.get('/works/OL45804W/editions.json?size=10');
  return res.data.entries;
}, []);

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
