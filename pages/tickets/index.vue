<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="breadcrumbs" />

    <h2 class="text-h4 q-my-md">
      {{ $t('tickets.title') }}
    </h2>

    <TicketsList
      :card-container-class="$style.cardContainer"
      grid
    />
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
.cardContainer {
  > :nth-of-type(odd) > * {
    background-color: var(--q-secondary);

    .q-table__grid-item-title {
      opacity: 0;
    }
  }

  > :nth-of-type(even) > * {
    color: var(--q-secondary);
    background-color: var(--q-accent);
  }
}
</style>
