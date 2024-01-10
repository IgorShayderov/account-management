<template>
  <QBreadcrumbs class="q-mb-sm">
    <QBreadcrumbsEl
      v-for="item in $props.items"
      :key="item.id"
      v-bind="item"
    />
  </QBreadcrumbs>
</template>

<script setup>
const $props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" module></style>
