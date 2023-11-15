<template>
    <p>Delivery Time: {{ deliveryTime }}</p>
</template>
  
<script>
  export default {
    name: 'DeliveryTimeAtom',
    props: {
      deliveryTime: String,
    },
  };
</script>
  
<style scoped>
</style>
  