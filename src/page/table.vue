<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const customerStore = useCustomerStore();
const { state: customers, isLoading: isLoadCustomerLoading, signal: signalCustomer } = customerStore.all();
const filters = reactive({
  global: { value: null, matchMode: 'contains' },
});

const toast = useToast();
watch(customers, () => {
  toast.add({ summary: 'Data Loaded', detail: 'now you can see all data in table' });
});

onBeforeUnmount(() => {
  signalCustomer.abort();
});
</script>

<template>
  <b-page
    :breadcrumbs="[
      {
        label: 'Table',
        to: '/table',
      },
    ]"
  >
    <DataTable :value="customers.customers" paginator :rows="10" :rows-per-page-options="[10, 15, 25, 50, 100]" :loading="isLoadCustomerLoading" :filters="filters">
      <template #header>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="filters['global'].value" placeholder="Global Search" />
        </span>
      </template>

      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="company" header="Company"></Column>
      <Column field="balance" header="Balance"></Column>
      <Column field="status" header="Status"></Column>
    </DataTable>
  </b-page>
</template>
