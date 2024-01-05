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
const { routes } = useRoutes();
const ticket = ref(null);
const $route = useRoute();

onMounted(async () => {
  const { id } = $route.params;
  const { data } = await useFetch(routes.api.ticketsPath({ id }));

  console.log(data.value, 'ticket');
});
</script>

<style lang="scss" module></style>
