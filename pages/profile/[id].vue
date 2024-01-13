<template>
  <div
    class="q-pa-md"
    :class="$style['profile']"
  >
    <AppBreadcrumbs :items="breadcrumbs" />

    <QCard class="my-card">
      <QCardSection>
        <h2 class="text-h4 q-my-md">
          {{ $t('profile.title') }}
        </h2>

        <template v-if="user">
          <p>{{ $t('profile.fields.name.title') }}: {{ user.name }}</p>

          <p>{{ $t('profile.fields.surname.title') }}: {{ user.surname }}</p>

          <AppDatepicker
            v-if="isCurrentUser"
            v-model="userDate"
            :class="$style['selector']"
          />

          <p v-else>
            {{ $t('profile.fields.birthdate.title') }}:
            {{ customDate(user.birthdate).format(DATE_FORMAT) }}
          </p>

          <CitiesSelector
            v-if="isCurrentUser"
            v-model="userCity"
            :class="$style['selector']"
            :label="$t('profile.fields.city.title')"
            class="q-mb-md"
          />

          <p v-else>
            {{ $t('profile.fields.city.title') }}: {{ user.city }}
          </p>

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
      </QCardSection>
    </QCard>
  </div>
</template>

<script setup>
const { DATE_FORMAT, customDate } = useDateFormats();
const { routes } = useRoutes();
const { t } = useI18n();
const { currentUser } = useAuth();

const $route = useRoute();

const { data: user } = await useFetch(routes.api.userPath({ id: $route.params.id }));

const breadcrumbs = [
  { label: t('root.title'), to: routes.rootPath() },
  { label: t('profile.title') },
];

const userCity = computed({
  get: () => user.value.city,
  set: (value) => {
    // FIXME request
    user.value.city = value;
  },
});

const userDate = computed({
  get: () => customDate(user.value.birthdate).format(DATE_FORMAT),
  set: (value) => {
    // FIXME request
    if (value !== null) {
      user.value.birthdate = customDate(value, DATE_FORMAT).toDate();
    }
  },
});

const isCurrentUser = computed(() => +user.value.id === currentUser.value?.id);
</script>

<style lang="scss" module>
.profile {
  --selector-width: 300px;
}

.selector {
  width: var(--selector-width);
}
</style>
