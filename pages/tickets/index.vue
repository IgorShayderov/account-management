<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="breadcrumbs" />

    <h2 class="text-h4 q-my-md">
      {{ $t('tickets.title') }}
    </h2>

    <TicketsList />
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const { t } = useI18n();

const breadcrumbs = [
  { label: t('root.title'), to: routes.rootPath() },
  { label: t('tickets.title') },
];
</script>

<style lang="scss" module>
</style>
