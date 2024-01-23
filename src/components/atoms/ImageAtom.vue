<template>
    <img :src= src alt="Product Image" class="product-image" @click="handleClick" />
  </template>
  
  <script>
  
  export default {
    name: 'ImageAtom',
    props: {
      src: String,
    },
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .product-image {
  width: auto;
  max-width: 300px;
  height: 200px; 
  cursor: pointer;
  }
  </style>
  