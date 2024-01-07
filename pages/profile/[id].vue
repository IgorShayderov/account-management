<template>
  <div>
    <h2 class="text-h4 q-my-md">
      {{ $t('profile.title') }}
    </h2>

    <p>{{ data.name }}</p>

    <section>
      <QAvatar
        rounded
        size="300px"
        font-size="82px"
        color="teal"
        text-color="white"
      >
        {{ data.name.charAt(0) }}
      </QAvatar>
    </section>

    <NuxtLink :to="routes.rootPath()">
      Back
    </NuxtLink>
  </div>
</template>

<script setup>
const { routes } = useRoutes();

const $route = useRoute();

const { data } = await useFetch(routes.api.userPath({ id: $route.params.id }));

</script>

<style lang="scss" module>
</style>
