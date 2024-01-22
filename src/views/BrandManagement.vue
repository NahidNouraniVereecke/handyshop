<template>
    <div id="app" class="container">
      <header class="header text-center">
        <h1>Brand Management</h1>
      </header>
      <main>
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <input v-model="searchTerm" @input="searchBrands" class="form-control" type="text" placeholder="Search for brand">
          </div>
        </div>
        <div class="row">
          <div v-for="brand in filteredBrands" :key="brand.id" class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ brand.name }}</h5>
                <p class="card-text">
                  <strong>Created on:</strong> {{ formatDateTime(brand.createdOn) }}<br>
                  <strong>Last updated on:</strong> {{ formatDateTime(brand.lastUpdatedOn) }}<br>
                  <strong>Created by:</strong> {{ brand.createdBy ? brand.createdBy.username : 'N/A' }}
                </p>
                <button @click="editBrand(brand)" class="btn btn-primary btn-sm">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        brands: [],
        searchTerm: '',
      };
    },
    created() {
      this.fetchBrands();
    },
    computed: {
        filteredBrands() {
    return this.brands.filter(brand =>
      Object.values(brand).some(value =>
        String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
      ) ||
      (brand.createdBy && brand.createdBy.username.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
      },
    },
    methods: {
      async fetchBrands() {
        try {
          const response = await axios.get('http://localhost:8081/brands', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          this.brands = response.data;
        } catch (error) {
          console.error('Error fetching brands:', error);
        }
      },
      searchBrands() {
        // Triggered when the search term changes
      },
      editBrand(brand) {
        console.log('Editing brand:', brand);
      },
      formatDateTime(dateTime) {
        return new Date(dateTime).toLocaleString();
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    margin-top: 30px;
  }
  
  .card {
    width: 100%;
  }
  </style>
  