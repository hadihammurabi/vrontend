<script setup lang="ts">
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

defineProps<{
  menus: any[],
}>();
</script>

<template>
  <nav id="bar" class="flex justify-content-between fixed w-full">
    <div id="left" class="flex">
      <img src="/top-bar-logo.png" class="m-2" />
      <Menubar id="left-menubar" :model="menus" />
    </div>
    <div id="right" class="flex justify-content-end p-3">
      <Button icon="pi pi-cog" severity="secondary" text rounded style="width: 25px; height: 25px"></Button>
    </div>
  </nav>
</template>

<style scoped>
#bar {
  height: 56px;
  box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
  top: 0;
  z-index: 999;
}
</style>

<style>
#left-menubar {
  background-color: white !important;
  border: none !important;
}
</style>
