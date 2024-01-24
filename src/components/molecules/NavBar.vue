<template>

<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">Home</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
      <b-nav-item href="/products">Products</b-nav-item>
      <b-nav-item v-if="shouldShowLink('shoppingCart')" href="/shoppingCart" >ShoppingCart</b-nav-item> 
      <b-nav-item href="/help">HelpPage</b-nav-item>
      <b-nav-item href="/impressum">Imprint</b-nav-item>
      <b-dropdown v-if="shouldShowLink('admin')" text="Management">
            <b-nav-item href="/addProduct" >Add product</b-nav-item>
            <b-nav-item href="/productMang">Products</b-nav-item>
            <b-nav-item href="/userMang">Users</b-nav-item>
            <b-nav-item href="/brandManagement">Brands</b-nav-item>
            <b-nav-item href="/orderManagement" >Orders</b-nav-item>
        </b-dropdown>
        <b-dropdown v-if="shouldShowLink('user')" text="User">
          <b-nav-item v-if="shouldShowLink('editUser')" href="/editProfile" >Profile</b-nav-item>
          <b-nav-item v-if="shouldShowLink('orderView')" href="/orderView">Orders</b-nav-item>
        </b-dropdown>
      </b-navbar-nav>


      <b-navbar-nav class="ms-auto">
        <b-navbar-brand v-if="shouldShowLink('login')" href="/login">Login</b-navbar-brand>
        <b-navbar-brand v-if="shouldShowLink('register')" href="/register" >Register</b-navbar-brand>
        <b-button  v-if="shouldShowLink('logout')" size="m" class="my-2 my-sm-0"  @click="logout" >Logout</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    
</template>

<script>

import { useUserStore } from '@/store/user.js';

export default {
  components: {
       
    },
  data() {
    return {
      store: useUserStore(),
    };
  },
  methods: {
    logout() {

        console.log("Role:");
        console.log(localStorage.getItem('role'));
        console.log("Token:")
        console.log(localStorage.getItem('access_token'));
        console.log("Username:")
        console.log(localStorage.getItem('username'));

        // Löscht die im localStorage gespeicherten Daten
        localStorage.removeItem('role');
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');

        console.log("Role:");
        console.log(localStorage.getItem('role'));
        console.log("Token:")
        console.log(localStorage.getItem('access_token'));
        console.log("Username:")
        console.log(localStorage.getItem('username'));

       

        this.store.clearUserInfo();
        this.$router.push({ name: 'home' });
    },
    shouldShowLink(linkName) {
      const userRole = this.store.userRole;

      
      if (userRole === 'ROLE_user') {
        switch (linkName) {
          case 'user':
          case 'editUser':
          case 'shoppingCart':
          case 'logout':
          case 'orderView':
            return true;
          default:
            return false;
        }
      }

      
      if (userRole === 'ROLE_admin') {
        switch (linkName) {
          case 'admin': 
          case 'addProduct':
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

      
      if (!userRole) {
        switch (linkName) {
          case 'login':
          case 'register':
            return true;
          default:
            return false;
        }
      }

      return false; 
    },
  },
};
</script>
<style scoped>
  .ml-auto-d-flex {
    margin-left: auto;
    display: flex;
  }
</style>


