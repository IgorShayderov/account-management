<template>
  <div class="q-pa-md">
    <AppBreadcrumbs :items="breacrumbs" />

    <h1 class="text-h4 q-my-md">
      {{ $t('root.title') }}
    </h1>

    <TicketsList />
  </div>
</template>

<script setup>
const { t } = useI18n();

const breacrumbs = [{ label: t('root.title') }];
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
