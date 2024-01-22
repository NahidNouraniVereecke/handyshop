<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/products" class="nav-link mb-2">Products</router-link>
      <router-link v-if="shouldShowLink('editUser')" to="/editProfile" class="nav-link mb-2">Your profile</router-link>
      <router-link v-if="shouldShowLink('editProducts')" to="/productMang" class="nav-link mb-2">Edit Phones</router-link>
      <router-link v-if="shouldShowLink('shoppingCart')" to="/shoppingCart" class="nav-link mb-2">ShoppingCart</router-link>
      <router-link v-if="shouldShowLink('editUsers')" to="/userMang" class="nav-link b-2">Edit Users</router-link>
      <router-link v-if="shouldShowLink('editBrands')" to="/brandManagement" class="nav-link b-2">Edit Brands</router-link>
      <router-link v-if="shouldShowLink('editOrders')" to="/orderManagement" class="nav-link b-2">Edit Orders</router-link>
      <router-link v-if="shouldShowLink('orderView')" to="/orderView" class="nav-link b-2">Orders</router-link>
      <router-link to="/help" class="nav-link mb-2">HelpPage</router-link>
      <router-link to="/impressum" class="nav-link mb-2">Imprint</router-link>


      <div class="ms-auto">
        <router-link v-if="shouldShowLink('login')" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="shouldShowLink('register')" to="/register" class="nav-link">Register</router-link>
        <router-link v-if="shouldShowLink('logout')" to="/logout" class="nav-link">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useUserStore} from '@/store/user.js';
export default {
  data(){
    return{
      store: useUserStore(),
    };
  },
  methods: {
    shouldShowLink(linkName) {
      const userRole = this.store.userRole;

      console.log(this.store.isLoggedIn);

      // Wenn die Rolle 'ROLE_user' ist
      if (userRole === 'ROLE_user') {
        switch (linkName) {
          case 'editUser':
          case 'shoppingCart':
          case 'logout':
          case 'orderView':
            return true;
          default:
            return false;
        }
      }
      
      // Wenn die Rolle 'ROLE_admin' ist
      if (userRole === 'ROLE_admin') {
        switch (linkName) {
          case 'editProducts':
          case 'editUsers':
          case 'logout':
          case 'editBrands':
          case 'editOrders':
            return true;
          default:
            return false;
        }
      }

      // Wenn die Rolle nicht gesetzt wurde (noch nicht im Local Storage)
      if (!userRole) {
        switch (linkName) {
          case 'login':
          case 'register':
            return true;
          default:
            return false;
        }
      }

      return false; // Standardmäßig nichts anzeigen
    },
    
  },
};
</script>


<style scoped>
.nav-link {
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>
