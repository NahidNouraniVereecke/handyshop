<template>
    <b-link :href="url" class="link">
      <slot></slot>
    </b-link>
  </template>
  
  <script>
  export default {
    props: {
      url: String,
    },
  };
  </script>
  
  <style scoped>
  .link {
    color: blau; 
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  