<template>
    <div class="checkbox">
      <input type="checkbox" :id="id" :checked="localChecked" @change="handleChange" :required="isRequired" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      isChecked: Boolean,
      isRequired: Boolean,
    },
    data() {
      return {
        localChecked: this.isChecked,
      };
    },
    methods: {
      handleChange() {
        this.localChecked = !this.localChecked;
        this.$emit('update:checked', this.localChecked);
      },
    },
  };
  </script>
  
  <style scoped>
  .checkbox{
  margin-left: 10px;
  }
  
  </style>
  
  