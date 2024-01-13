<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="breacrumbs" />

    <h1 class="text-h4 q-my-md">
      {{ $t('root.title') }}
    </h1>

    <TicketsList>
      <template #top-left>
        <h2 class="q-table__title q-ma-none">
          {{ $t('tickets.title') }}
        </h2>

        <NuxtLink
          class="q-mx-md"
          :class="$style.link"
          :to="routes.ticketsPath()"
        >
          {{ $t('root.actions.details') }}
        </NuxtLink>
      </template>
    </TicketsList>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const { t } = useI18n();

const breacrumbs = [{ label: t('root.title') }];
</script>

<style lang="scss" module>
.link {
  color: var(--q-accent);

  &:hover {
      color: var(--q-dark);
  }
}
</style>
