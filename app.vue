<template>
  <main>
    <NuxtLoadingIndicator
      duration="5000"
      throttle="0"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup>
</script>

<style lang="scss" module>
:root {
  --gloomy-primary: "#b5cfe7";
}
</style>
