<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <nav id="bar" class="flex fixed w-full">
    <div id="logo" class="flex align-content-center justify-content-center py-1">
      <img src="/top-bar-logo.png" />
    </div>
    <div id="menu" class="flex align-content-center justify-content-end w-full p-3">
      <Button icon="pi pi-cog" severity="secondary" text rounded style="width: 25px; height: 25px"></Button>
    </div>
  </nav>
</template>

<style scoped>
#bar {
  height: 56px;
  box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
  top: 0;
}

#logo {
  width: 240px;
}

#menu {
}
</style>