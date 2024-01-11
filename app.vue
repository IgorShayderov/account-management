<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup>
import colors from './colors';

const colorVariables = Object.fromEntries(
  Object.entries(colors).map(([k, v]) => [`--${k}-color`, v]),
);
</script>

<style lang="scss" module>
:root {
  --gloomy-primary: "#b5cfe7";
}
</style>
