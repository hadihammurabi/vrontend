<script lang="ts" setup>
const breadcrumbs = ref([
  {
    label: 'About',
    to: '/about'
  },
]);

const breadcrumbsResolve = () => {
  if (route.path === '/about') {
    breadcrumbs.value = breadcrumbs.value.filter((b) => b.to !== '/about/you');
  }

  if (route.path === '/about/you') {
    breadcrumbs.value.push({
      label: 'You',
      to: '/about/you'
    });
  }
};

onMounted(breadcrumbsResolve);
const route = useRoute();
watch(route, breadcrumbsResolve);
</script>

<template>
  <b-spage
    :breadcrumbs="breadcrumbs">
    <h1>It's About</h1>
    <div>
      <router-link to="/about">Me</router-link>
      <router-link to="/about/you">You</router-link>
    </div>
    <router-view></router-view>
  </b-spage>
</template>