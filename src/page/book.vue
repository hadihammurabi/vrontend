<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

const bookStore = useBookStore();
const { state: entries, isLoading: isLoadBookLoading } = bookStore.all();
</script>

<template>
  <bpage
    :breadcrumbs="[
      {
        label: 'Books',
        to: '/book',
      },
    ]"
  >
    <h1>Book Table</h1>

    <data-table :value="entries" :loading="isLoadBookLoading">
      <column field="key" header="KEY"></column>
      <column field="title" header="Title"></column>
      <column field="publishers" header="Publishers">
        <template #body="{ data }">
          <div class="flex gap-1">
            <Tag v-for="(publisher, i) in data.publishers" :key="`${publisher}-${i}`">
              {{ publisher }}
            </Tag>
          </div>
        </template>
      </column>
      <column field="subjects" header="Subjects">
        <template #body="{ data }">
          <div class="flex gap-1">
            <Tag v-for="(subjects, i) in data.subjects" :key="`${subjects}-${i}`">
              {{ subjects }}
            </Tag>
          </div>
        </template>
      </column>
    </data-table>
  </bpage>
</template>
