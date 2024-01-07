<template>
  <div>
    <h2 class="text-h4 q-my-md">
      {{ $t('profile.title') }}
    </h2>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();

// получаем текущего пользователя и делаем редирект
</script>

<style lang="scss" module>
</style>
