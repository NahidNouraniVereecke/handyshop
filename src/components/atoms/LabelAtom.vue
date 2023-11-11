<template>
    <label :for="htmlFor">
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
  
  </style>