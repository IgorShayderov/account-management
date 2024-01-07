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

    <div
      class="row justify-center"
    >
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
            />

            <QInput
              v-model="password"
              autocomplete="current-password"
              filled
              clearable
              :placeholder="$t('login.fields.password.placeholder')"
              :type="isPassworVisible ? 'text' : 'password'"
              :label="$t('login.fields.password.label')"
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
                type="submits"
                color="light-green-7"
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
  </div>
</template>

<script setup>
const { routes } = useRoutes();

const $router = useRouter();

const username = ref('');
const password = ref('');
const passwordInputType = ref('password'); // 'text' | 'password'

const isPassworVisible = computed(() => passwordInputType.value === 'text');

const validate = () => {
  myForm.value.validate().then((success) => {
    if (success) {
      // yay, models are correct
    } else {
      // oh no, user has filled in
      // at least one invalid value
    }
  });
};

// to reset validations:
const reset = () => {
  myForm.value.resetValidation();
};

const onSubmit = () => {
  console.log('submit');
  $router.push(routes.rootPath());
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
