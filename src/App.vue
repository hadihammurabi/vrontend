<script setup lang="ts">
import Toast from 'primevue/toast';

const isLogin = ref(true);

const router = useRouter();
onBeforeMount(() => {
  if (!isLogin.value) {
    router.push('/auth');
  }
});
</script>

<template>
  <layout-default v-if="isLogin">sdsdf</layout-default>
  <router-view v-else></router-view>

  <toast></toast>
</template>
