<template>
    <b-button @click="handleClick" class="button">
      <slot></slot>
    </b-button>
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
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
  }
  </style>