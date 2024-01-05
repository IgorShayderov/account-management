<template>
  <div>
    <h2>{{ $t('tickets.title') }}</h2>

    <ul
      v-for="ticket in tickets"
      :key="ticket.id"
    >
      <li>
        <NuxtLink :to="routes.ticketPath({ id: ticket.id })">
          {{ ticket.title }}
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const tickets = reactive([]);
const { data } = await useFetch(routes.api.ticketsPath());

if (data.value !== null) {
  tickets.push(...data.value);
}
</script>

<style lang="scss" module>
</style>
