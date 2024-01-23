<template>
    <p>
      <slot></slot>
    </p>
  </template>
  
  <script>
  export default {
    name: 'ParagraphAtom',
  }
  </script>
  
  <style scoped>
  p{
    margin-left: 30px;
  }
  </style>