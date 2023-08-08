<script setup lang="ts">
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import OverlayPanel from 'primevue/overlaypanel';

defineProps<{
  menus: any[],
}>();

const notifPopup = ref();
const notifPopupOpen = (e: Event) => {
  notifPopup.value?.toggle(e);
};
const notifs = ref([
  { id: 1, user: 'Leslie Alexander', title: 'mengirim pesan baru untuk kamu' },
  { id: 2, user: 'Leslie Alexander', title: 'nge-like status kamu' },
]);
</script>

<template>
  <nav id="bar" class="flex justify-content-between fixed w-full">
    <div id="left" class="flex">
      <img src="/top-bar-logo.png" class="m-2" />
      <Menubar id="left-menubar" :model="menus" />
    </div>
    <div id="right" class="flex justify-content-end gap-3 p-3">
      <Button icon="pi pi-bell" severity="secondary" text rounded style="width: 25px; height: 25px" @click="notifPopupOpen"></Button>
      <OverlayPanel ref="notifPopup" id="overlay-notif">
        <BnotificationList :notifs="notifs"></BnotificationList>
      </OverlayPanel>

      <Button icon="pi pi-user" severity="secondary" text rounded style="width: 25px; height: 25px"></Button>
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

#overlay-notif .p-overlaypanel-content {
  padding: .2rem 0;
}

#overlay-notif > .p-overlaypanel:before {
  margin-left: -15px !important;
}

#overlay-notif > .p-overlaypanel:after,
#overlay-notif > .p-overlaypanel:before {
  left: calc(var(--overlayArrowLeft, 0) + .8rem) !important;
}

#left-menubar .p-menuitem-link {
  padding: 0.75rem .5rem !important;
}

@media screen and (max-width: 960px) {
  #left-menubar .p-menubar-root-list {
    width: unset !important;
  }
}
</style>
