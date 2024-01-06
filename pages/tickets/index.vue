<template>
  <div>
    <h2>{{ $t('tickets.title') }}</h2>

    <TicketsList />

    <NuxtLink :to="routes.rootPath()">
      {{ $t('tickets.title') }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
</script>

<style lang="scss" module>
</style>
