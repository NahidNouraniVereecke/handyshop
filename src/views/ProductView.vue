<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search products..." />

    <div class="product-view">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :shortDescription="product.shortDescription"
        :deliveryTime="product.deliveryTime"
        :productId="product.id"
      />
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import ProductCard from "@/components/molecules/ProductCard.vue";
  
  export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      searchQuery: '',
      products: []  
    };
  },
  mounted() {
    this.fetchPhones();
  },
  methods: {
    async fetchPhones() {
      try {
        const response = await axios.get('http://localhost:8081/phones');  
        this.products = response.data.map(phone => ({
          id: phone.id,
          title: phone.name,
          image: phone.picture,  
          price: phone.price,
          shortDescription: phone.description,  
          deliveryTime: "2-3 days"  
        }));
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      }
      return this.products.filter(product => 
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
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
  