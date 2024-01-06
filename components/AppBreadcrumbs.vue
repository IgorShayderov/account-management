<template>
  <QBreadcrumbs>
    <QBreadcrumbsEl
      v-for="item in $props.items"
      :label="item.label"
      :key="item.id"
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
