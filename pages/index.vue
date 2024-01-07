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

      <QBtn
        unelevated
        type="submits"
        color="light-green-7"
        size="lg"
        :label="$t('root.actions.exit')"
        @click="handleExit"
      />
    </footer>
  </div>
</template>

<script setup>
const { routes } = useRoutes();
const { logOut } = useAuth();

const $router = useRouter();

const handleExit = () => {
  logOut();
  $router.push(routes.loginPath());
};
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
