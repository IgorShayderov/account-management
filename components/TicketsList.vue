<template>
  <div class="q-pa-md">
    <QTable
      flat
      bordered
      :title="$t('tickets.title')"
      :rows="tickets"
      :columns="columns"
      :pagination="pagination"
      :rows-per-page-options="[10, 25, 50, 100, 0]"
      row-key="name"
    />
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const DATE_FORMAT = 'DD.MM.YYYY';

const { routes } = useRoutes();
const { t } = useI18n();

const tickets = reactive([]);

const { data } = await useFetch(routes.api.ticketsPath());

if (data.value !== null) {
  tickets.push(...data.value);
}

const pagination = reactive({
  page: 1,
  rowsPerPage: 10,
});
const columns = [
  {
    name: 'id',
    label: t('tickets.fields.id.label'),
    field: 'id',
    align: 'left',
    sortable: true,
  },
  {
    name: 'title',
    label: t('tickets.fields.title.label'),
    field: 'title',
    align: 'left',
    sortable: true,
  },
  {
    name: 'text',
    label: t('tickets.fields.text.label'),
    field: 'text',
    align: 'left',
  },
  {
    name: 'author',
    label: t('tickets.fields.author.label'),
    field: ({ author }) => author.name,
    align: 'left',
    sortable: true,
  },
  {
    name: 'date',
    label: t('tickets.fields.date.label'),
    field: ({ date }) => dayjs(date).format(DATE_FORMAT),
    sort: (a, b, rowA, rowB) => dayjs(rowA.date, DATE_FORMAT).diff(dayjs(rowB.date, DATE_FORMAT)),
    align: 'left',
    sortable: true,
  },
];
</script>

<style lang="scss" module></style>
