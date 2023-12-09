<template>
    <img :src="src" alt="Product Image" class="product-image" @click="handleClick" />
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
    max-width: 100%;
    cursor: pointer;
  }
  </style>
  