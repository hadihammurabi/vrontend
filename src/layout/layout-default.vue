<script setup lang="ts">
const menus = ref([
    { label: 'Home' , icon: 'pi pi-home', to: '/' },
    { label: 'About', icon: 'pi pi-file', items: [
      { label: 'Me', icon: 'pi pi-user', to: '/about' },
      { label: 'You', icon: 'pi pi-users', to: '/about/you' },
    ]},
    { label: 'Books', icon: 'pi pi-book', to: '/book' },
    { label: 'Table', icon: 'pi pi-table', to: '/table' },
    { label: 'Auth', icon: 'pi pi-lock', items: [
      { label: 'Login', icon: 'pi pi-sign-in', to: '/auth' },
      { label: 'Register', icon: 'pi pi-plus', to: '/auth/register' },
    ]},
  ]);
</script>

<template>
  <bar-top :menus="menus"></bar-top>
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<style scoped>
#main {
  margin-top: 56px;
  z-index: 0;
}
</style>
