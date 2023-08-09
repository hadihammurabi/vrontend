<script setup lang="ts">
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import OverlayPanel from 'primevue/overlaypanel';

defineProps<{
  menus: any[],
}>();

const menubar = ref();
const notifPopup = ref();

const notifPopupOpen = (e: Event) => {
  notifPopup.value?.toggle(e);
};

onClickOutside(menubar, () => {
  
});
</script>

<template>
  <nav id="bar" class="flex justify-content-between fixed w-full">
    <div id="left" class="flex">
      <img src="/top-bar-logo.png" class="m-2" />
      <Menubar id="left-menubar" :model="menus" ref="menubar" />
    </div>
    <div id="right" class="flex justify-content-end gap-3 p-3">
      <Button icon="pi pi-bell" severity="secondary" text rounded style="width: 25px; height: 25px" @click="notifPopupOpen"></Button>
      <OverlayPanel ref="notifPopup" id="overlay-notif">
        <NotificationList></NotificationList>
      </OverlayPanel>

      <Button icon="pi pi-user" severity="secondary" text rounded style="width: 25px; height: 25px"></Button>
    </div>
  </nav>
</template>

<style scoped>
#bar {
  height: 56px;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #dee2e6 !important;
  background-color: white !important;
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
