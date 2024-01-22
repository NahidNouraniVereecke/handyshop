<template>
  <div id="app">
    <header class = "header">
      <HeaderAtom type="h1">Handyshop</HeaderAtom>
    </header>
    
      <ParagraphAtom>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.:</ParagraphAtom>
    
      <TitleAtom :text="'Our Best Sellers:'" />

      <b-row class="product-view">
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
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ParagraphAtom from '@/components/atoms/ParagraphAtom.vue';
import HeaderAtom from '@/components/atoms/headerAtom.vue';
import ProductCard from "@/components/molecules/ProductCard.vue";
import TitleAtom from '@/components/atoms/TitleAtom.vue';

export default {
  components: {
    HeaderAtom,
    ParagraphAtom,
    ProductCard,
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
