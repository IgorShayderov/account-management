<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="breadcrumbs" />

    <h2 class="text-h4 q-my-md">
      {{ $t('ticket.title') }}
    </h2>

    <template v-if="ticket">
      <p>{{ $t('tickets.fields.title.label') }}: {{ ticket.title }}</p>

      <p>{{ $t('tickets.fields.text.label') }}: {{ ticket.text }}</p>

      <p>{{ $t('tickets.fields.author.label') }}: {{ ticket.author.name }}</p>

      <p>{{ $t('tickets.fields.date.label') }}:  {{ dayjs(ticket.date).format(DATE_FORMAT) }}</p>
    </template>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const { routes } = useRoutes();
const { t } = useI18n();
const { DATE_FORMAT } = useDateFormats();

const $route = useRoute();

const ticket = ref(null);

const breadcrumbs = [
  { label: t('root.title'), to: routes.rootPath() },
  { label: `${t('ticket.title')} ${ticket.value ? ticket.value.id : ''}` },
];

const { id } = $route.params;
const { data } = await useFetch(routes.api.ticketPath({ id }));

ticket.value = data.value;
</script>

<style lang="scss" module></style>
