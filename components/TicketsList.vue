<template>
  <QTable
    flat
    bordered
    :title="$t('tickets.title')"
    :rows="tickets"
    :columns="columns"
    :pagination="pagination"
    :rows-per-page-options="[10, 25, 50, 100, 0]"
    :loading="pending"
    :filter="filter"
    :table-header-class="$style.header"
    :table-class="$style.table"
    row-key="name"
  >
    <template #body-cell-author="{ row }">
      <td>
        <NuxtLink
          :class="$style.link"
          :to="routes.profilePath({ id: row.author.id })"
        >
          {{ row.author.name }}
        </NuxtLink>
      </td>
    </template>

    <template #body-cell-title="{ row }">
      <td>
        <NuxtLink
          :class="$style.link"
          :to="routes.ticketPath({ id: row.id })"
        >
          {{ row.title }}
        </NuxtLink>
      </td>
    </template>

    <template #top-right>
      <QInput
        borderless
        dense
        debounce="300"
        v-model="filter"
        color="primary"
        outlined
        :placeholder="$t('tickets.filter')"
      >
        <template #append>
          <QIcon name="search" />
        </template>
      </QInput>
    </template>

    <template #top-left>
      <slot name="top-left" />
    </template>
  </QTable>
</template>

<script setup>
const { DATE_FORMAT, customDate } = useDateFormats();
const { routes } = useRoutes();
const { t } = useI18n();

const tickets = reactive([]);

const { data, pending } = await useFetch(routes.api.ticketsPath());

if (data.value !== null) {
  tickets.push(...data.value);
}

const filter = ref('');

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
    style: 'width: 100px',
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
    align: 'left',
    sortable: true,
  },
  {
    name: 'date',
    label: t('tickets.fields.date.label'),
    field: ({ date }) => customDate(date).format(DATE_FORMAT),
    sort: (a, b, rowA, rowB) => customDate(rowA.date, DATE_FORMAT)
      .diff(customDate(rowB.date, DATE_FORMAT)),
    align: 'left',
    sortable: true,
  },
];
</script>

<style lang="scss" module>
.header {
  background-color: var(--q-accent);
  color: var(--q-secondary);
}

.link {
  color: var(--q-accent);

  &:hover {
      color: var(--q-dark);
  }
}

.table :global {
  tbody tr:nth-of-type(2n) {
    background-color: var(--q-accent);
    color: var(--q-secondary);

    :local(.link) {
      color: var(--q-secondary);

      &:hover {
        color: var(--q-dark);
      }
    }
  }
}
</style>
