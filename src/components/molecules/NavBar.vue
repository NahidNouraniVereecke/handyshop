<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/products" class="nav-link mb-2">Products</router-link>
      <router-link to="/help" class="nav-link mb-2">HelpPage</router-link>
      <router-link to="/impressum" class="nav-link mb-2">Imprint</router-link>

      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>

      <div class="ms-auto">
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/register" class="nav-link">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
 

 
</script>

<style scoped>
.nav-link {
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>
