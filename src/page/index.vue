<script lang="ts" setup>
import Button from 'primevue/button';

const counterStore = useCounterStore();
</script>

<template>
  <b-page>
    <h1>Welcome {{ counterStore.count }}</h1>
  
    <div>
      <Button @click="counterStore.decrement">-2</Button>
      <Button @click="counterStore.increment">+2</Button>
    </div>
  </b-page>
</template>
