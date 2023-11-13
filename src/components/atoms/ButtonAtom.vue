<template>
    <button @click="handleClick" class="button">
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
  .button{
    height: 35px;
    margin: 10px;
    border-radius: 8px;
  }
  
  </style>