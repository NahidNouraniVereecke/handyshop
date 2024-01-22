<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/products" class="nav-link mb-2">Products</router-link>

      <router-link to="/help" class="nav-link mb-2">HelpPage</router-link>
      <router-link to="/impressum" class="nav-link mb-2">Imprint</router-link>

      <!-- Dropdown-Menü für Verwaltung -->
      <b-dropdown v-if="shouldShowLink('admin')" text="Verwaltung">
        <router-link to="/addProduct" class="dropdown-item">Add product</router-link>
        <router-link to="/productMang" class="dropdown-item">Edit Products</router-link>
        <router-link to="/userMang" class="dropdown-item">Edit Users</router-link>
        
      </b-dropdown>

      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>

      <div class="ms-auto">
        <router-link v-if="shouldShowLink('login')" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="shouldShowLink('register')" to="/register" class="nav-link">Register</router-link>
        <router-link v-if="shouldShowLink('logout')" to="/logout" class="nav-link">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/user.js';

export default {
  data() {
    return {
      store: useUserStore(),
    };
  },
  methods: {
    shouldShowLink(linkName) {
      const userRole = this.store.userRole;

      
      if (userRole === 'ROLE_user') {
        switch (linkName) {
          case 'editUser':
          case 'shoppingCart':
          case 'logout':
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
.nav-link {
  margin-right: 10px; 
}
</style>
