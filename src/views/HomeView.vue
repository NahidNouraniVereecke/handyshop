<template>
  <div id="app">
    <header class = "header">
      <HeaderAtom type="h1">Handyshop</HeaderAtom>
    </header>
    
      
    
      <TitleAtom :text="'Buy the newst Phones for the best prices in our onlineshop!'" />

      <b-row class="product-view">
        
      </b-row>
  </div>
</template>

<script>
import HeaderAtom from '@/components/atoms/headerAtom.vue';
import TitleAtom from '@/components/atoms/TitleAtom.vue';

export default {
  components: {
    HeaderAtom,
    TitleAtom
  },
  data() {
    return {
      products: [
      {
            id: "1",
            title: "iPhone X",
            image: "https://via.placeholder.com/150",
            price: 800.00,
            shortDescription: ".....",
            deliveryTime: "2-3 days",
          },
          {
            id: "2",
            title: "Galaxy S9",
            image: "https://via.placeholder.com/150",
            price: 1100.00,
            shortDescription: "......",
            deliveryTime: "2-3 days",
          },
          {
            id: "3",
            title: "iPhone 13",
            image: "https://via.placeholder.com/150",
            price: 1500.00,
            shortDescription: ".......",
            deliveryTime: "2-3 days",
          },      ],
    };
  },
};
</script>

<style scoped>
.product-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
}

.header {
  text-align: center;
}
</style>
