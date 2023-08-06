<script lang="ts" setup>
defineProps<{
  notifs: any[],
}>();
</script>

<template>
  <div v-for="notif in notifs" :key="notif.id" class="flex justify-content-between column-gap-3 py-3 cursor-pointer">
    <div class="flex min-w-0 column-gap-3 px-3">
      <img class="h-3rem w-3rem flex-none border-circle bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <div class="text-sm font-semibold leading-6 text-gray-900">{{ notif.user }}</div>
        <div class="mt-1 truncate text-xs leading-5 text-gray-500">{{ notif.title }}</div>
      </div>
    </div>
  </div>

  <div class="flex justify-content-center py-2">
    <router-link to="/">Lihat Semua</router-link>
  </div>
</template>