<template>
  <QInput
    v-model="date"
    v-bind="$attrs"
    filled
  >
    <template #append>
      <QIcon
        name="event"
        class="cursor-pointer"
      >
        <QPopupProxy
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <QDate
            v-model="date"
            :mask="DATE_FORMAT"
            minimal
          >
            <div class="row items-center justify-end">
              <QBtn
                v-close-popup
                :label="$t('root.actions.close')"
                color="primary"
                flat
              />
            </div>
          </QDate>
        </QPopupProxy>
      </QIcon>
    </template>
  </QInput>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const $props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const $emit = defineEmits(['update:modelValue']);

const { DATE_FORMAT } = useDateFormats();

const date = computed({
  get: () => $props.modelValue,
  set: (value) => $emit('update:modelValue', value),
});
</script>

<style lang="scss" module></style>
