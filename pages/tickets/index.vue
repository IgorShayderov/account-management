<template>
  <div>
    <h2>{{ $t('tickets.title') }}</h2>

    <ul
      v-for="ticket in tickets"
      :key="ticket.id"
    >
      <li>
        <NuxtLink :to="{ path: routes.ticketPath({ id: ticket.id }), params: { ticket } }">
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
import routes from '@/routes.js';

const tickets = reactive([]);

onMounted(async () => {
  const data = await fetch(routes.api.ticketsPath());
  const { tickets: fetchedTickets } = await data.json();

  tickets.push(...fetchedTickets);
});
</script>

<style lang="scss" module>
</style>
