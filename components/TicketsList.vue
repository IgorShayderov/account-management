<template>
  <div class="q-pa-md">
    <QTable
      flat
      bordered
      :title="$t('tickets.title')"
      :rows="tickets"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const { t } = useI18n();

// :pagination="initialPagination"

const { data } = await useFetch(routes.api.ticketsPath());

const tickets = reactive([]);

const columns = [
  {
    name: 'id',
    label: t('tickets.fields.id.label'),
    field: 'id',
  },
  {
    name: 'title',
    label: t('tickets.fields.title.label'),
    field: 'title',
  },
  {
    name: 'text',
    label: t('tickets.fields.text.label'),
    field: 'text',
  },
  {
    name: 'author',
    label: t('tickets.fields.author.label'),
    field: ({ author }) => author.name,
  },
  {
    name: 'date',
    label: t('tickets.fields.date.label'),
    field: 'date',
  },
];

if (data.value !== null) {
  tickets.push(...data.value);
}
</script>

<style lang="scss" module></style>
