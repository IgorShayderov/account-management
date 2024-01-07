<template>
  <div>
    <div v-if="ticket">
      <h2 class="text-h4 q-my-md">
        {{ ticket.title }}
      </h2>

      <p>{{ ticket.text }}</p>

      <p>Author: {{ ticket.author.name }}</p>
    </div>

    <NuxtLink :to="routes.rootPath()">
      {{ $t('root.title') }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const ticket = ref(null);
const $route = useRoute();

onMounted(async () => {
  const { id } = $route.params;
  const { data } = await useFetch(routes.api.ticketPath({ id }));

  ticket.value = data.value;
});
</script>

<style lang="scss" module></style>
