<template>
  <button
    :class="btnClasses"
    :disabled="$props.isLoading"
    type="button"
  >
    <span :class="btnTextClasses">
      <slot name="default">
        {{ labelText }}
      </slot>
    </span>
  </button>
</template>

<script setup>
const $props = defineProps({
  labelText: {
    type: String,
    default: '',
  },
  isValid: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const $style = useCssModule();

const btnClasses = computed(() => ({
  [$style.btn]: true,
  [$style.btn_invalid]: !$props.isValid,
  [$style.btn_loading]: $props.isLoading,
}));

const btnTextClasses = computed(() => ({
  [$style.btn__text]: true,
  [$style.btn__text_loading]: $props.isLoading,
}));
</script>

<style lang="scss" module>
.btn {
  --input-height: 32px;
  --vertical-padding: 5px;

  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  height: var(--input-height);
  padding: var(--vertical-padding) 10px;

  &_invalid {
    opacity: 0.6;
  }

  &_loading {
    background-image: url('@/assets/icons/loader.svg');
    background-repeat: no-repeat;
    background-size: calc(var(--input-height) + (var(--vertical-padding) * 2));
    background-position: center;
  }

  &[disabled] {
    cursor: wait;
  }
}

.btn__text {
  &_loading {
    visibility: hidden;
  }
}
</style>
