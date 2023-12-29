<template>
  <div>
    <div v-if="ticket">
      <h2>Ticket!</h2>
    </div>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
import routes from '@/routes.js';

defineProps({
  ticket: {
    type: Object,
    required: true,
  },
});

const ticket = ref(null);

onMounted(async () => {
  const data = await fetch(routes.api.ticketsPath());
});
</script>

<style lang="scss" module></style>
