<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="[{label: $t('root.title')}]" />

    <h1 class="text-h4 q-my-md">
      {{ $t('root.title') }}
    </h1>

    <TicketsList />

    <footer>
      <NuxtLink :to="routes.profilePath()">
        {{ $t('profile.title') }}
      </NuxtLink>

      <NuxtLink :to="routes.loginPath()">
        {{ $t('root.actions.exit') }}
      </NuxtLink>
    </footer>
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
