<template>
    <a :href="url" class="link">
      <slot></slot>
    </a>
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
    
    color: blue; 
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  