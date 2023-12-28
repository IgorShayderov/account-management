<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup>
import makeServer from '@/fake_server';

makeServer();
</script>

<style>
:root {
  --background-color: #041325;
  --sub-background-color: #232e3a;
  --border-color: #d6dbfc;
  --text-color: #ffffff;
  --success-color: #3d982c;
  --alert-color: #f20b0b;
  --alert-background: rgba(255, 0, 0, 0.46);
  --highlight-color: blue;
}
</style>
