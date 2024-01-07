<template>
  <div
    class="q-pa-md"
  >
    <AppBreadcrumbs :items="breadcrumbs" />

    <h2 class="text-h4 q-my-md">
      {{ $t('profile.title') }}
    </h2>

    <template v-if="user">
      <p>{{ $t('profile.fields.name.title') }}: {{ user.name }}</p>

      <p>{{ $t('profile.fields.surname.title') }}: {{ user.surname }}</p>

      <p>
        {{ $t('profile.fields.birthdate.title') }}:
        {{ dayjs(user.birthdate).format(DATE_FORMAT) }}
      </p>

      <p>{{ $t('profile.fields.city.title') }}: {{ user.city }}</p>

      <section>
        <QAvatar
          rounded
          size="300px"
          font-size="82px"
          color="teal"
          text-color="white"
        >
          {{ user.name.charAt(0) }}
        </QAvatar>
      </section>
    </template>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';

const { DATE_FORMAT } = useDateFormats();
const { routes } = useRoutes();
const { t } = useI18n();

const $route = useRoute();

const { data: user } = await useFetch(routes.api.userPath({ id: $route.params.id }));

const breadcrumbs = [
  { label: t('root.title'), to: routes.rootPath() },
  { label: t('profile.title') }];
</script>

<style lang="scss" module>
</style>
