<script setup lang="ts">
const http = useHttp();

const entries = ref([]);

const loadBooks = async () => {
  const res = await http.get('/works/OL45804W/editions.json?size=10');
  entries.value = res.data.entries;
};

onMounted(() => {
  loadBooks();
});
</script>


<template>
  <h1>Book Table</h1>
  <code>
    {{ entries  }}
  </code>
</template>