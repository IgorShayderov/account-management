<template>
  <div>
    <h2>{{ $t('profile.title') }}</h2>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
</script>

<style lang="scss" module>
</style>
