<template>
  <b-container class="shopping-cart">
    <b-row>
      <b-col>
        <h1>Your Shopping Cart</h1>

        <div v-if="cart.length">
          <b-list-group>
            <b-list-group-item v-for="(item, index) in cart" :key="index" class="d-flex justify-content-between align-items-center">
              <div>
                <h5 class="mb-1">{{ item.title }} (x{{ item.quantity }})</h5>
                <p class="mb-1">{{ item.shortDescription }}</p>
                <small>Price: ${{ item.price }} each</small>
              </div>
              <div>
                <b-button variant="warning" @click="changeQuantity(item, -1)" :disabled="item.quantity <= 1">-</b-button>
                <b-button variant="danger" @click="removeFromCart(item)">Remove</b-button>
              </div>
            </b-list-group-item>
          </b-list-group>

          <div class="mt-3">
            <h4>Total Price: ${{ totalPrice }}</h4>
            <b-button variant="primary" class="mr-2">Checkout</b-button>
            <b-button variant="danger" @click="clearCart">Clear Cart</b-button>
          </div>
        </div>

        <b-alert v-else variant="info" show>Your cart is empty.</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      let rawCart = sessionStorage.getItem('cart');
      if (rawCart) {
        rawCart = JSON.parse(rawCart);
         const groupedCart = rawCart.reduce((acc, product) => {
          const found = acc.find(item => item.id === product.id);
          if (found) {
            found.quantity++;
          } else {
            acc.push({ ...product, quantity: 1 });
          }
          return acc;
        }, []);

        this.cart = groupedCart;
      }
    },
    removeFromCart(itemToRemove) {
      this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
      this.updateSessionStorage();
    },
    changeQuantity(item, change) {
      const product = this.cart.find(p => p.id === item.id);
      if (product && product.quantity + change > 0) {
        product.quantity += change;
        this.updateSessionStorage();
      }
    },
    clearCart() {
      this.cart = [];
      sessionStorage.removeItem('cart');
    },
    updateSessionStorage() {
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  margin-top: 20px;
}
</style>
