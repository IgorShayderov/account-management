<template>
  <div>
    <h2 class="text-h4 q-my-md">
      {{ $t('tickets.title') }}
    </h2>

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
