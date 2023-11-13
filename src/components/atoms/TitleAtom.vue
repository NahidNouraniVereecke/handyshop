<template>
    <component :is="type">
      <slot></slot>
    </component>
  </template>
  
  <script>
  export default {
    name: 'TitleAtom',
    props: {
      type: String,
    },
  }
  </script>
  
  <style scoped>
  
  </style>