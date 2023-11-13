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
    width: 100px;
    height: 30px;
    border-radius: 8px;
    

  }
  
  </style>