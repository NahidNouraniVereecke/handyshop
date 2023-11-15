<template>
    <p>{{ shortDescription }}</p>
  </template>
  
  <script>
  export default {
    name: 'ShortDescriptionAtom',
    props: {
      shortDescription: String,
    },
  };
  </script>
  
  <style scoped>
  </style>
  