<template>
  <div>
    <h2>Тикеты</h2>

    <ul
      v-for="ticket in tickets"
      :key="ticket.id"
    >
      <li>{{ ticket.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import routes from '@/routes.js';

const tickets = await useFetch(routes.api.ticketsPath());

console.log(data);
</script>

<style lang="scss" module>
</style>
