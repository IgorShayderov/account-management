<template>
  <label
    :for="id"
    :class="$style.label"
  >
    <slot name="default">
      {{ $props.labelText }}
    </slot>
    <input
      :id="id"
      aria-describedby="errorMessages"
      :aria-invalid="!isValid"
      :value="$props.modelValue"
      :class="inputClasses"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
    >

    <slot name="additional" />
  </label>

  <p
    id="errorMessages"
    :class="errorMessagesClasses"
  >
    {{ $props.errors[0] }}
  </p>
</template>

<script setup>
const $props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  labelText: {
    type: String,
    default: '',
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  errors: {
    type: Array,
    default: () => [],
  },
});

const $emit = defineEmits(['update:modelValue']);

const isUsed = ref(false);

const handleInput = (event) => {
  isUsed.value = false;
  $emit('update:modelValue', event.target.value);
};

const handleChange = () => {
  isUsed.value = Boolean($props.modelValue);
};

const $style = useCssModule();

const inputClasses = computed(() => ({
  [$style.input]: true,
  [$style.input_valid]: isUsed.value && $props.isValid,
  [$style.input_invalid]: isUsed.value && !$props.isValid,
}));
const errorMessagesClasses = computed(() => {
  const shouldBeVisible = isUsed.value && $props.errors.length > 0 && !$props.isValid;

  return {
    [$style['error-message']]: true,
    [$style['error-message_visible']]: shouldBeVisible,
  };
});
</script>

<style lang="scss" module>
.label {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.input {
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  height: 32px;
  padding: 5px 10px;
  width: 100%;

  &:focus-visible {
    outline: var(--background-color) auto 1px;
  }
}

.input_valid {
  outline: var(--success-color) auto 1px;

  &:focus-visible {
    outline: var(--success-color) auto 1px;
  }
}

.input_invalid {
  outline: var(--alert-color) auto 1px;

  &:focus-visible {
    outline: var(--alert-color) auto 1px;
  }
}

.error-message {
  color: var(--alert-color);
  font-size: 0.875rem;
  line-height: 1;
  margin: 0 0 5px;
  min-height: 0.875rem;
  text-align: left;
  visibility: hidden;
}

.error-message_visible {
  visibility: visible;
}
</style>
