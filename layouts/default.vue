<template>
  <main>
    <nav>
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
    </nav>
    <slot />
  </main>
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

<style lang="scss" module></style>
