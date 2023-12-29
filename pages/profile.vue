<template>
  <div>
    <h2>{{ $t('profile.title') }}</h2>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
import routes from '@/routes';

</script>

<style lang="scss" module>
</style>
