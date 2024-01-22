<template>
  <div v-if="error !== null" class="error-message">
    {{ error }}
  </div>
</template>

  
  <script>
  export default {
    name: 'FehlerMeldungAtom',
    props: {
      error: String,
    },
  };
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    margin-top: 5px; 
    
  }
  </style>