<template>
    <div class="product-view">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :shortDescription="product.shortDescription"
        :deliveryTime="product.deliveryTime"
        :productId="product.id"
      />
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/molecules/ProductCard.vue";
  
  export default {
    components: {
      ProductCard,
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
          },
          {
            id: "4",
            title: "Iphone 12",
            image: "https://via.placeholder.com/150",
            price: 1800.00,
            shortDescription: "......",
            deliveryTime: "2-3 days",
          },
          {
            id: "5",
            title: "Galaxy S20",
            image: "https://via.placeholder.com/150",
            price: 1500.00,
            shortDescription: ".........",
            deliveryTime: "2-3 days",
          },
         
          {
            id: "6",
            title: "Galaxy S22 Ultra",
            image: "https://via.placeholder.com/150",
            price: 1500.00,
            shortDescription: ".....",
            deliveryTime: "3-5 days",
          },
        ],
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
  </style>
  