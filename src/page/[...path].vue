<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <h1>Not Found</h1>
  <div>
    <Button @click="$router.push('/')">Go to Home</Button>
  </div>
</template>
