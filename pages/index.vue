<template>
  <div>Root</div>

  <NuxtLink :to="routes.ticketsPath()">
    Tickets
  </NuxtLink>

  <NuxtLink :to="routes.profilePath()">
    Profile
  </NuxtLink>
</template>

<script setup>
const { routes } = useRoutes();
</script>

<style lang="scss" module>
</style>
