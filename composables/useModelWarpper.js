const useModelWrapper = (props, emit, name = 'modelValue') => computed({
  get: () => props[name],
  set: (value) => {
    emit(`update:${name}`, value);
  },
});

export default useModelWrapper;
