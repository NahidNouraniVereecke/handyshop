<template>
    <div class="checkbox">
      <input type="checkbox" :checked="isChecked" @change="handleChange" />
      <label>{{ label }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckboxAtom',
    props: {
      label: String,
      isChecked: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleChange(event) {
        this.$emit('update:checked', event.target.checked);
      },
    },
  };
  </script>
  
  <style scoped>
  .checkbox {
    display: flex;
    align-items: center;
  }
  
  .checkbox label {
    margin-left: 8px;
  }
  </style>
  