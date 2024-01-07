<template>
  <main>
    <nav class="row justify-end">
      <QBtn
        @click="$router.push(routes.profilePath({ id: 1 }))"
      >
        {{ $t('profile.title') }}
      </QBtn>

      <QBtn
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
