<template>
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
</template>

<script setup>
const { routes } = useRoutes();

const { data } = await useFetch(routes.api.ticketsPath());

const tickets = reactive([]);

if (data.value !== null) {
  tickets.push(...data.value);
}
</script>

<style lang="scss" module></style>
