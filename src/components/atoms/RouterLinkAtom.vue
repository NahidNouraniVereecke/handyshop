<template>
    <router-link :to="url" class="router-link">
      <slot></slot>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'RouterLinkAtom',
    props: {
    
      url: String,
    },
  };
  </script>
  
  <style scoped>
  .router-link {
    color: white;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 10px;
  }
  </style>
  