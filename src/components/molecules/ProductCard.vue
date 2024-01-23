<template>
  <div class="product-card">
    <ImageAtom :src="require(`@/pics/${image}`)" @click="goToProductPage" />
        <TitleAtom :text="title" />
    <ShortDescriptionAtom :shortDescription="shortDescription" />
    <PriceAtom :price="price" />
    <DeliveryTimeAtom :deliveryTime="deliveryTime" />
    <ButtonAtom @click="addToCart">Add to cart </ButtonAtom>
  </div>
</template>

<script>
import ImageAtom from "@/components/atoms/ImageAtom.vue";
import TitleAtom from "@/components/atoms/TitleAtom.vue";
import ShortDescriptionAtom from "@/components/atoms/ShortDescriptionAtom.vue";
import PriceAtom from "@/components/atoms/PriceAtom.vue";
import DeliveryTimeAtom from "@/components/atoms/DeliveryTimeAtom.vue";
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";

export default {
  components: {
    ImageAtom,
    TitleAtom,
    ShortDescriptionAtom,
    PriceAtom,
    DeliveryTimeAtom,
    ButtonAtom,
  },
  props: {
    title: String,
    image: String,
    price: Number,
    shortDescription: String,
    deliveryTime: String,
    productId: String,
  },
  mounted(){
    console.log('recieved:',this.title);
  },
  methods: {
    goToProductPage() {
      this.$router.push(`/products/${this.productId}`);
    },
    addToCart() {
  console.log(`Added ${this.title} to the cart`);

 
  const productDetails = {
    id: this.productId,
    title: this.title,
    image: this.image,
    price: this.price,
    shortDescription: this.shortDescription,
    deliveryTime: this.deliveryTime
  };

 
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

 
  cart.push(productDetails);

 
  sessionStorage.setItem('cart', JSON.stringify(cart));
},
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  margin: 16px;
}
</style>