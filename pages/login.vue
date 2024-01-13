<template>
  <div class="column">
    <header
      class="row"
      :class="$style['card__header']"
    >
      <h2 class="text-h4 q-my-md">
        {{ $t('login.title') }}
      </h2>
    </header>

    <QCard
      bordered
      class="q-pa-lg shadow-1"
      :class="$style['login__card']"
    >
      <QCardSection>
        <QForm
          class="q-gutter-md"
          @submit.prevent="onSubmit"
        >
          <QInput
            v-model="username"
            autocomplete="username"
            filled
            clearable
            :placeholder="$t('login.fields.username.placeholder')"
            type="text"
            :label="$t('login.fields.username.label')"
            :disable="isLoading"
          />

          <QInput
            v-model="password"
            autocomplete="current-password"
            filled
            clearable
            :placeholder="$t('login.fields.password.placeholder')"
            :type="isPassworVisible ? 'text' : 'password'"
            :label="$t('login.fields.password.label')"
            :disable="isLoading"
          >
            <template #append>
              <QIcon
                :name="isPassworVisible ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="passwordInputType = isPassworVisible ? 'password' : 'text'"
              />
            </template>
          </QInput>

          <QCardActions class="q-px-md">
            <QBtn
              unelevated
              :loading="isLoading"
              type="submits"
              color="primary"
              size="lg"
              class="full-width"
              :label="$t('login.submit.title')"
            />
          </QCardActions>
        </QForm>
      </QCardSection>

      <QCardSection class="text-center q-pa-none">
        <p class="text-grey-6">
          {{ $t('login.register') }}
        </p>
      </QCardSection>
    </QCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guest',
});

const { routes } = useRoutes();
const { logIn } = useAuth();
const { t } = useI18n();
const { makeErrorNotification } = useNotifications();

const $router = useRouter();

const isLoading = ref(false);
const username = ref('');
const password = ref('');
const passwordInputType = ref('password'); // 'text' | 'password'

const isPassworVisible = computed(() => passwordInputType.value === 'text');

const validate = () => {
  //
};

const onSubmit = async () => {
  try {
    isLoading.value = true;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    if (Math.floor(Math.random() * 2) === 1) {
      throw new Error('Error');
    }

    await logIn({ username: username.value, password: password.value });

    $router.push(routes.rootPath());
  } catch (e) {
    const message = e?.response?.status === 401
      ? t('login.messages.unauthorized')
      : t('login.messages.unsuccessfulAuth');

    makeErrorNotification(message);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" module>
.card__header {
  justify-content: center;
  margin-top: 30px;
}

.login__card {
  align-self: center;
  width: 340px;
}
</style>
