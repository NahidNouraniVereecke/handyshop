<template>
    <input class="input" :id="id" :type="type" :value="value" :placeholder="placeholder">
  </template>
  
  <script>
  export default {
    name: 'LabelAtom',
    props: {
      id: String,
      type: String,
      value: String,
      placeholder: String,
    }
  }
  </script>

  <style scoped>
  .input {
    margin-top: 10px;
    height: 30px;
    border-radius: 8px;
  }
  </style>