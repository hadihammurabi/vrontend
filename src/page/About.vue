<script setup lang="ts">
const route = useRoute();
const fullPath = ref('');
onMounted(() => {
  fullPath.value = route.fullPath;
});
</script>

<template>
  {{ fullPath }} Me
</template>