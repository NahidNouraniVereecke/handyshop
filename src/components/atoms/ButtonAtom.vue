<template>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonAtom',
    props: {
      handleClick: Function,
    }
  }
  </script>
  
  <style scoped>
  
  </style>