<template>
    <label :for="htmlFor" class="label">
      <slot></slot>
    </label>
  </template>
  
  <script>
  export default {
    name: 'LabelAtom',
    props: {
      htmlFor: String,
    }
  }
  </script>
  
  <style scoped>
  .label{
    margin-left: 10px;
  }
  
  </style>