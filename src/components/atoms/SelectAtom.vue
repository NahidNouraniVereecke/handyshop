<template>
    <select class="select" :id="id" v-model="localSelectedValue" :required="isRequired">
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </select>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      options: Array,
      selectedValue: String,
      isRequired: Boolean,
    },
    data() {
      return {
        localSelectedValue: this.selectedValue,
      };
    },
    watch: {
      localSelectedValue(newVal) {
        this.$emit("update:selectedValue", newVal);
      },
      selectedValue(newVal) {
        this.localSelectedValue = newVal;
      },
    },
  };
  </script>
  
  <style scoped>
  .select {
    height: 30px;
    margin-top: 10px;
  }
  </style>
  