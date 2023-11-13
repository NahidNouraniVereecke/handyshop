<template>
    <div class="form-field">
      <Label :for="htmlFor">
        {{ label }}
      </Label>
      <Input :id="id" :type="type" :value="value" :placeholder="placeholder" />
    </div>
  </template>
  
  <script>
  // import Input from '@/components/atoms/InputAtom.vue';
  import Label from '@/components/atoms/LabelAtom.vue';
  
  export default {
    name: 'FormField',
    props: {
      htmlFor: String,
      label: String,
      id: String,
      type: String,
      value: String,
      placeholder: String,
    },
    components: {
      // Input,
      Label,
    },
  }
  </script>
  
  <style scoped>
  .form-field {
    display: flex;
    flex-direction: column;
  }
  </style>