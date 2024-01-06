<template>
  <div>
    <h1>Root</h1>

    <TicketsList />

    <NuxtLink :to="routes.profilePath()">
      {{ $t('profile.title') }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
</script>

<style lang="scss" module>
:root {
  --primary-color:  #007bff;
  --secondary-color: #67a8e4;
  --accent-color: rgb(51, 122, 183);
  --dark-color: rgb(0, 0, 0);
  --positive-color: #28a745;
  --negative-color: red;
  --info-color: #eee;
}
</style>
