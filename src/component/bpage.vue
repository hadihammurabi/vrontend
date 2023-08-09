<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb';
import { MenuItem } from 'primevue/menuitem';

defineProps<{
  breadcrumbs?: MenuItem[];
}>();

const home = {
  icon: 'pi pi-home',
  to: '/',
};
</script>

<template>
  <Breadcrumb
    id="breadcrumb"
    v-if="breadcrumbs?.length && breadcrumbs?.length > 0"
    :home="home"
    :model="breadcrumbs"
  />

  <div id="page-wrapper">

    <slot></slot>
  </div>
</template>

<style scoped>
#page-wrapper {
  padding: 1rem 7rem 0 7rem;
}

#breadcrumb {
  border: unset !important;
  border-bottom: 1px solid #dee2e6 !important;
}
</style>
