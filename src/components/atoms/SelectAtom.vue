<template>
  <select :id="id" :required="required" >
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    id: String,
    options: Array,
    value: String,
    required: Boolean,
  },
};
</script>
  
  <style scoped>
  .select {
    height: 30px;
    margin-top: 10px;
  }
  </style>
  