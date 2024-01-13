<template>
  <main>
    <nav class="row justify-end q-py-md">
      <QBtn
        color="primary"
        class="q-mr-md"
        @click="$router.push(routes.profilePath({ id: currentUser.id }))"
      >
        {{ $t('profile.title') }}
      </QBtn>

      <QBtn
        color="primary"
        class="q-mr-md"
        :label="$t('root.actions.exit')"
        @click="handleExit"
      />
    </nav>
    <slot />
  </main>
</template>

<script setup>
const { routes } = useRoutes();
const { logOut, currentUser } = useAuth();

const $router = useRouter();

const handleExit = () => {
  logOut();
  $router.push(routes.loginPath());
};
</script>

<style lang="scss" module></style>
