<template>
    <p>Price: {{ price }} EUR</p>
  </template>
  
  <script>
  export default {
    name: 'PriceAtom',
    props: {
      price: Number,
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  